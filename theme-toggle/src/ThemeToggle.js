import React from 'react';

const ThemeToggle = ({ toggleTheme, theme }) => {
    return (
        <div className='theme-toggle'>
            <label className='switch'>
                <input type='checkbox' onChange={toggleTheme} checked={theme === 'dark'} />
                <span className='slider round'></span>
            </label>
            <p>current theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
        </div>
    );
};

export default ThemeToggle;