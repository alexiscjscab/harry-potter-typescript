import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';

// const root = document.getElementById('root') as HTMLElement

const rootElement = document.getElementById('root')
createRoot(
  rootElement as Element
).render(
  <App/>
)


