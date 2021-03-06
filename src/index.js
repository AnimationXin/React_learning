import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { counter } from './store/index';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

const store = createStore(counter);

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render();
// 每次修改状态,从新渲染页面
store.subscribe(render);

serviceWorker.unregister();