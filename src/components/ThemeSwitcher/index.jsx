import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../reducer';

const ThemeSwitcher = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkTheme} onChange={handleChange} />
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </label>
    </div>
  );
};

export default ThemeSwitcher;