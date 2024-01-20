import React from 'react';
import Logo from '../../../assets/images/logo.png';
import CupIcon from '../../../assets/images/svg/cup.svg';

export const Header = () => {
  return (
    <header>
      <div>
        <a href='./index.html'>
          <img src={Logo} alt='Logo' />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#favourite-coffee'>
              <span>Favorite coffee</span>
              <span></span>
            </a>
          </li>
          <li>
            <a href='#about'>
              <span>About</span>
              <span></span>
            </a>
          </li>
          <li>
            <a href='#app-link'>
              <span>Mobile app</span>
              <span></span>
            </a>
          </li>
          <li>
            <a href='#contact-us'>
              <span>Contact us</span>
              <span></span>
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a href='/'>
          <span>
            <span>Menu</span>
            <img src={CupIcon} alt='Cup icon' />
          </span>
          <span></span>
        </a>
      </div>
    </header >
  );
};
