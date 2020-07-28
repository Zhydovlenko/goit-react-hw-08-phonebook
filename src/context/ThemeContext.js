import React from 'react';

export const themeConfig = {
  light: {
    fontColor: '#333333',
    bodyBg: 'white',
  },
  dark: {
    fontColor: 'white',
    bodyBg: '#333333',
  },
};

const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;
