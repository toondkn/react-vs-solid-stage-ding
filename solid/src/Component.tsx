import { createSignal, createEffect } from 'solid-js';
import type { Component as ComponentType } from 'solid-js';
import { PrettyNumber } from './PrettyNumber';
import { Wrapper } from './Wrapper';

export const Component: ComponentType<{ initialValue: number; }> = props => {
    const [value, setValue] = createSignal(props.initialValue);

    function handleClick() {
        setValue(value() + 1);
    }

    createEffect(() => {
        if (value() % 10 === 0)
            alert('Multiple of 10!');
    });

    return (
        <Wrapper>
            <PrettyNumber number={value()} />
            <button onClick={handleClick}>+1</button>
        </Wrapper>
    );
}
