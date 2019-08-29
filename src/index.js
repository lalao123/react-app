import React from 'react';
import ReactDom from 'react-dom';
import App from './layouts/App';
import {Provider} from "react-redux";
import store from './store/index'

import {BrowserRouter} from 'react-router-dom'

ReactDom.render(
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
)