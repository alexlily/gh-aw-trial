import { useState } from 'react';

type Color = 'green' | 'red';

function ToggleButton() {
  const [color, setColor] = useState<Color>('green');

  return (
    <button
      onClick={() => setColor((prev) => (prev === 'green' ? 'red' : 'green'))}
      style={{ backgroundColor: color, color: 'white', padding: '1rem 2rem', fontSize: '1.25rem' }}
    >
      button
    </button>
  );
}

export default ToggleButton;
