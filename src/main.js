import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '~/style.css'

import {Provider} from 'mobx-react';
import stores from '~/store';

stores.complex.load().then(() => {
    ReactDom.render(<Provider stores={stores}>
        <App/>
    </Provider>, document.querySelector('#app'));
});

stores.exercises.load();
