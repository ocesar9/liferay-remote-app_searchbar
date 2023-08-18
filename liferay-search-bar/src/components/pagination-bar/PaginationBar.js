import './PaginationBar.css';

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="liferay-search-pagination">
      <a
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </a>
      <a className="pagination-index">
        <span className="mb-0">{currentPage}</span>
      </a>
      <a
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </a>
    </div>
  );
};

export default PaginationBar;
