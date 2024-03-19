import { type Component } from 'solid-js';

const styleObj = { 'font-size': '3rem', color: 'green' };

export const PrettyNumber: Component<{ number: number; }> = p => (
    <div style={styleObj}>
        {p.number}
    </div>
);
