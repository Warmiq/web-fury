import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as Theme from './styles/theme';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { injectGlobal } from 'styled-components';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    html, body {
      
        background-color: ${Theme.LIGHT_GRAY};
        font-family: ${Theme.FONT_FAMILY};
      
    }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
