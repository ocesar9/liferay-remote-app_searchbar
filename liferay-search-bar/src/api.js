export const API_URL = 'https://vale.com';

export function FETCH_CONTENT({
  contentId,
  acceptLanguage,
  query,
  itemsPerPage,
  currentPage,
  search = false,
}) {
  let url;

  if (search) {
    let encodedQuery = encodeURIComponent(query);
    url = `${API_URL}/o/headless-delivery/v1.0/content-structures/${contentId}/structured-contents?search=${encodedQuery}&pageSize=${itemsPerPage}&page=${currentPage}`;
  } else {
    url = `${API_URL}/o/headless-delivery/v1.0/content-structures/${contentId}/structured-contents?pageSize=${itemsPerPage}&page=${currentPage}`;
  }

  return {
    url,
    options: {
      method: 'GET',
      headers: {
        'Accept-Language': acceptLanguage,
      },
    },
  };
}
