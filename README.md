# Liferay Search - Headless Delivery

### That Search Bar was created with the intention of an alternative to getting portal data faster in portal optimization cases, the structure used was created as a Liferay Client Extension.

## Code Structure

    import { createRoot } from 'react-dom/client';
> First is necessary to transform the App.js in the main route of the application.

    class WebComponent extends HTMLElement {
      connectedCallback() {
        createRoot(this).render(
          <App
            param={this.getAttribute('param')}
            param={this.getAttribute('param')}
          />,
          this,
        );
      }
    }
> After that set in the App with the attributes to use to run the application, these attributes it have been configured in the Client Extension properties.

    const ELEMENT_ID = 'vale-busca-de-conteudo-interno';
    if (!customElements.get(ELEMENT_ID)) {
      customElements.define(ELEMENT_ID, WebComponent);
    }
> Lastly set the id to be identified by the Liferay Portal and be rendered.

    Liferay.ThemeDisplay.getPortalURL()
> Use this method to get the domain URL and have access to API GUI (/o/api) requests.

    themeDisplay.getLanguageId()
> Use this method to get the language set up in the portal to use the data from API GUI (/o/api) in the accessed language.

## File structure

> To set up the Liferay variables is necessary to add eslint global variables exceptions inside the project root file (.eslintrc.js)

      module.exports = {
        globals: {
          Liferay: 'true',
          themeDisplay: 'true',
        },
      };
> Lastly is necessary to create the build files (build/static/css - main.*.css) and (build/static/js - main.*.js)

    yarn run build

## API GUI
> Accessing Headless Delivery - API GUI and using a structure content id is possible get all the contents created by that structure

    /o/headless-delivery/v1.0/content-structures/{contentSctructureId}/structured-contents


