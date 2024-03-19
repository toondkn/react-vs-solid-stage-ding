import React, { useCallback, useEffect, useState } from 'react';

export const Component: React.FC<{ initialValue: number; }> = props => {
    const [value, setValue] = useState(props.initialValue);

    const handleClick = useCallback(() => {
        setValue(value + 1);
    }, [value]);

    useEffect(() => {
        if (value % 10 === 0)
            alert('Multiple of 10!');
    }, [value]);

    return (
        <div style={{ backgroundColor: 'red', display: 'flex', gap: '2rem', padding: '1rem' }}>
            <div style={{ backgroundColor: 'blue', padding: '1rem', color: 'white' }}>
                {value}, big {value + 1000}
            </div>
            <button onClick={handleClick}>+1</button>
        </div>
    );
}
