import React from 'react';

import clasess from './Header.scss';

import logoIcon from '../../../assets/images/icons/play-button.svg';

 const Header =  (props) => {
  return (
    <div className={ clasess.Header }>
      <div className={ clasess.Icon }>
        <img src={logoIcon} />
      </div>
      {props.children}
    </div>
  )
}
export default Header;