import { JSXElement, type Component } from 'solid-js';

export const Wrapper: Component<{ children: JSXElement; }> = p => (
    <div style={{ display: 'flex', background: 'blue', gap: '2rem', padding: '2rem' }}>
        {p.children}
    </div>
);
