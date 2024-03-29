import React from 'react';
import PinIcon from '../../../assets/images/svg/map-pin.svg';
import PhoneIcon from '../../../assets/images/svg/phone.svg';
import ClockIcon from '../../../assets/images/svg/clock.svg';

export const Footer = () => {
  return (
    <footer>
      <div>
        <h2>
          Sip, Savor, Smile.
          <span>It’s coffee time!</span>
        </h2>
        <div>
          <a href='https://twitter.com/' target='_blank' rel="noreferrer" >
            <svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect x='0.5' y='0.5' width='59' height='59' rx='29.5' stroke='#C1B6AD' />
              <path
                d='M41 21.0101C41 21.0101 38.9821 22.2022 37.86 22.5401C37.2577 21.8476 36.4573 21.3567 35.567 21.134C34.6767 20.9112 33.7395 20.9673 32.8821 21.2945C32.0247 21.6218 31.2884 22.2045 30.773 22.9638C30.2575 23.7231 29.9877 24.6224 30 25.5401V26.5401C28.2426 26.5856 26.5013 26.1959 24.931 25.4055C23.3607 24.6151 22.0103 23.4487 21 22.0101C21 22.0101 17 31.0101 26 35.0101C23.9405 36.408 21.4872 37.109 19 37.0101C28 42.0101 39 37.0101 39 25.5101C38.9991 25.2315 38.9723 24.9537 38.92 24.6801C39.9406 23.6735 41 21.0101 41 21.0101Z'
                stroke='#E1D4C9' stroke-linecap='round' stroke-linejoin='round' />
            </svg>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#C1B6AD" />
              <path
                d="M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z"
                stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z"
                stroke="#E1D4C9" />
              <path d="M35.5 24.51L35.51 24.4989" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#C1B6AD" />
              <path
                d="M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z"
                stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h3>Contact us</h3>
        <nav>
          <ul>
            <li>
              <a target='_blank' rel="noreferrer"
                href="https://www.google.com/maps/place/Pasticceria+Fratelli+D'Antonio/@42.5683746,12.6353211,17z/data=!4m15!1m8!3m7!1s0x132efb47279bb92f:0x77f7f2acf88fe8b8!2zVmlhbGUgQ2VzYXJlIEJhdHRpc3RpLCAxMDYsIDA1MTAwIFRlcm5pIFRSLCDQhtGC0LDQu9GW0Y8!3b1!8m2!3d42.5683746!4d12.637896!16s%2Fg%2F11b8v63908!3m5!1s0x132efb40e2baad51:0x181ab2b1b70f15fc!8m2!3d42.568135!4d12.6408424!16s%2Fg%2F1wmzgft5?entry=ttu">
                <img src={PinIcon} alt='pin icon' />8558 Green Rd.,
                LA
              </a>
              <span></span>
            </li>
            <li>
              <a target='_blank' rel="noreferrer" href='phone:+380000000'>
                <img src={PhoneIcon} alt='Phone icon' />+1 (603) 555-0123</a>
              <span></span>
            </li>
            <li><img src={ClockIcon} alt='clock icon' />Mon-Sat: 9:00 AM – 23:00 PM</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};