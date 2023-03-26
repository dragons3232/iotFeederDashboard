import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/images/logo.png"
      width={80}
      {...props}
    />
  );
};

export default Logo;
