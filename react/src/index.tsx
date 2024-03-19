import React from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from './Component';

const rootElement = document.getElementById('root');
if (rootElement === null)
    throw new Error('Root element is missing.');

const root = createRoot(rootElement);

root.render(<Component initialValue={42} />);
