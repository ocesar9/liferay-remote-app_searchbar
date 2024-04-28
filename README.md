# Liferay SearchBar

### Esta barra de pesquisa foi desenvolvida para proporcionar uma alternativa ágil na obtenção de dados do portal, especialmente em situações que exigem otimização. Sua estrutura foi concebida como uma extensão do cliente Liferay.

> Importações necessárias

    import { createRoot } from 'react-dom/client';

> Para começar, é crucial que o arquivo App.js seja transformado na rota principal do aplicativo. Se necessário, podem ser adicionados parâmetros para definir comportamentos específicos para a aplicação.

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

> Em seguida, declare uma constante que encapsule o elemento personalizado e o defina como conteúdo web. Este processo instrui o portal, por meio do ELEMENT_ID, sobre qual elemento ele precisa renderizar

    const ELEMENT_ID = 'liferay-search';
    if (!customElements.get(ELEMENT_ID)) {
      customElements.define(ELEMENT_ID, WebComponent);
    }

> Utilize este método para obter o URL do domínio e acessar as solicitações da API de interface do usuário (/o/api).

    Liferay.ThemeDisplay.getPortalURL()

> Caso sua aplicação faça uso do ESLint crie uma exceção para o uso da váriavel Liferay

    module.exports = {
    globals: {
      Liferay: 'true',
      themeDisplay: 'true',
    },
  };


> Utilize este método e atribua seu resultado a uma variável para permitir o uso das chamadas à API no idioma configurado no portal. Isso possibilitará o acesso aos dados da API de interface do usuário (/o/api) no idioma correspondente.

    LiferayPortalLanguage = themeDisplay.getLanguageId()

> Por fim, é necessário gerar os arquivos de compilação por meio do yarn build

    yarn run build
 
  ![files](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/files.png)

## API GUI

> Através do Headless Delivery - API GUI e utilizando um ID de estrutura de conteúdo, é viável recuperar todos os conteúdos criados por essa estrutura dentro do Portal Liferay.

    /o/headless-delivery/v1.0/content-structures/{contentSctructureId}/structured-contents

  ![api-gui](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/api-gui.png)

### Configurações do Portal

  > No módulo de Documentos e Mídias, crie uma pasta de referência para armazenar os códigos-fonte necessários gerados pela compilação da aplicação.

  ![portal-1](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/liferay_part1.png)

  > Acesse a área de aplicativos através do menu global e selecione a opção 'Aplicativos Remotos'.

  ![portal-2](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/liferay_part2.png)

  > Crie um novo elemento personalizado.

  ![portal-3](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/liferay_part3.png)

  > Por fim, adicione o nome do componente personalizado, o nome do elemento HTML (ELEMENT_ID), a URL do JavaScript, a URL do CSS e a URL do código-fonte.

  ![portal-4_1](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/liferay_part4_1.png)
  ![portal-4_2](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/liferay_part4_2.png)
  ![portal-4_3](https://github.com/ocesar9/liferay-search-bar_headless-api/blob/main/liferay-search-bar/images/liferay_part4_3.png)
