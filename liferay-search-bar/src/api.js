const API_URL =
  typeof Liferay !== 'undefined' ? Liferay.ThemeDisplay.getPortalURL() : null;
const acceptLanguage =
  typeof themeDisplay !== 'undefined' ? themeDisplay.getLanguageId().replace('_', '-') : 'en-US';

export function FETCH_CONTENT({
  userEmail,
  userPassword,
  contentId,
  query,
  itemsPerPage,
  currentPage,
  search = false,
}) {
  let url;
  const auth = window.btoa(`${userEmail}:${userPassword}`);

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
        'Authorization': `Basic ${auth}` 
      },
    },
  };
}
