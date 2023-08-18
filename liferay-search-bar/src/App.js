import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';
import { API_URL, FETCH_CONTENT } from './api'; // Update import statement
import useFetch from './hooks/useFetch';
import Card from './components/card/Card';
import './App.css';
import PaginationBar from './components/pagination-bar/PaginationBar';
import Loading from './interface-elements/Loading';
import Error from './interface-elements/Error';

const App = ({ contentId, itemsPerPage, scopeClass }) => {
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState();
  const { loading, setLoading, error, request } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { url, options } = FETCH_CONTENT({
        contentId,
        query: query || undefined,
        itemsPerPage,
        currentPage,
        search: query ? true : undefined,
      });

      const { response, json } = await request(url, options);

      if (response?.ok) {
        setLoading(false);
        if (query) {
          setQuery(query);
          setSearchResults(json.items);
        } else {
          setItems(json.items);
        }
        setCurrentPage(json.page);
        setTotalPages(json.lastPage);
      }
    }

    fetchData();
  }, [currentPage, query]);

  const handleSearch = async (query) => {
    const { url, options } = FETCH_CONTENT({
      contentId,
      query,
      itemsPerPage,
      currentPage: 1,
      search: true,
    });

    const { response, json } = await request(url, options);

    if (response && response.ok) {
      setLoading(false);
      setQuery(query);
      setSearchResults(json.items);
      setCurrentPage(json.page);
      setTotalPages(json.lastPage);
    }
  };

  return (
    <div className={`liferay-search ${scopeClass}`}>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <Error message={error} />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <ul className="liferay-search__results-list">
            {(searchResults.length > 0 ? searchResults : items).map((item) => (
              <Card
                item={item}
                url={API_URL}
                contentId={contentId}
                key={item.id}
              />
            ))}
          </ul>
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};
class WebComponent extends HTMLElement {
  connectedCallback() {
    createRoot(this).render(
      <App
        contentId={this.getAttribute('contentId')}
        itemsPerPage={this.getAttribute('itemsPerPage')}
        scopeClass={this.getAttribute('scopeClass')}
      />,
      this,
    );
  }
}

// contentId, itemsPerPage, scopeClass

const ELEMENT_ID = 'liferay-search';
if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}

export default App;
