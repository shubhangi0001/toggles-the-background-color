import React, { useState } from 'react';

const BackgroundColorToggler = () => {
  const [isBackgroundLight, setBackgroundLight] = useState(true);

  const handleToggleBackground = () => {
    setBackgroundLight((prevIsBackgroundLight) => !prevIsBackgroundLight);
  };

  const backgroundColor = isBackgroundLight ? '#f0f0f0' : '#333';

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        cursor: 'pointer',
      }}
      onClick={handleToggleBackground}
    >
      Click to toggle background color!
    </div>
  );
};

export default BackgroundColorToggler;
