import { render } from 'solid-js/web';
import { Component } from './Component';

const rootElement = document.getElementById('root');
if (rootElement === null)
    throw new Error('Root element is missing.');

render(() => <Component initialValue={42} />, rootElement);
