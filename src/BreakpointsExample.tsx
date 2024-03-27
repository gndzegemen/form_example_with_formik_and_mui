import { useState, useEffect } from 'react';

export const BreakpointsExample = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) {
                setBackgroundColor('lightblue');
            } else if (width < 960) {
                setBackgroundColor('lightgreen');
            } else if (width < 1280) {
                setBackgroundColor('lightyellow');
            } else {
                setBackgroundColor('lightcoral');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor }}>
            <h2>Breakpoints Example</h2>
            <p>This is a div with dynamic background color based on screen size.</p>
        </div>
    );
}

