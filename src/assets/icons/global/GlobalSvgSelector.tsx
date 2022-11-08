import React from 'react'

type Props = {
    id: string;
}

export const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'sun_switch':
      return  <svg id='sun-icon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.59336 15C6.59336 10.3749 10.3573 6.61094 14.9824 6.61094C19.6075 6.61094 23.3715 10.3749 23.3715 15C23.3715 19.6251 19.6075 23.3891 14.9824 23.3891C10.3573 23.3891 6.59336 19.6251 6.59336 15Z" stroke="white" stroke-width="0.8"/>
              <path d="M24.1055 20.2734C23.1914 21.873 21.8379 23.2089 20.2383 24.1406L25.5293 25.5645L24.1055 20.2734Z" fill="white"/>
              <path d="M14.9824 0L12.2754 4.82221C13.1367 4.57617 14.0507 4.45312 14.9824 4.45312C15.9141 4.45312 16.8281 4.57617 17.6894 4.82221L14.9824 0Z" fill="white"/>
              <path d="M4.43555 4.45312L5.85937 9.72656C6.7735 8.12689 8.09186 6.80854 9.69141 5.87695L4.43555 4.45312Z" fill="white"/>
              <path d="M4.80469 12.2754L0 15L4.80469 17.7246C4.55859 16.8633 4.43549 15.9492 4.43549 15C4.43549 14.0507 4.55854 13.1367 4.80469 12.2754Z" fill="white"/>
              <path d="M5.85937 20.2734L4.43555 25.5645L9.72656 24.1406C8.12695 23.2089 6.7735 21.873 5.85937 20.2734Z" fill="white"/>
              <path d="M14.9824 25.5469C14.0333 25.5469 13.1191 25.4239 12.2402 25.1777L14.9824 30.0001L17.7246 25.1777C16.8457 25.4238 15.9316 25.5469 14.9824 25.5469Z" fill="white"/>
              <path d="M20.2651 5.88584C21.8554 6.81133 23.1805 8.1376 24.1038 9.72936L25.5351 4.45569L20.2651 5.88584Z" fill="white"/>
              <path d="M29.9653 15.0086L25.1635 12.2904C25.3944 13.1568 25.5293 14.0619 25.5293 15C25.5293 15.9454 25.3926 16.8576 25.1582 17.7301L29.9653 15.0086Z" fill="white"/></svg>;
    case 'moon_switch':
      return <svg id="moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6603 14.3591C23.3873 14.1907 23.0349 14.2216 22.7985 14.4377C21.0769 15.9992 18.85 16.8596 16.5291 16.8596C11.3778 16.8596 7.18671 12.6685 7.18671 7.51721C7.18671 5.19617 8.04712 2.96942 9.60864 1.24787C9.82398 1.01056 9.85639 0.658998 9.6872 0.385988C9.51801 0.11371 9.18677 -0.0126329 8.8808 0.0737929C3.65149 1.55457 0 6.38855 0 11.829C0 18.5658 5.48053 24.0461 12.2172 24.0461C17.6576 24.0461 22.4918 20.3947 23.9725 15.1655C24.0602 14.8566 23.9326 14.5281 23.6603 14.3591Z" fill="#1E1E1E"/>
              <path d="M11.9008 9.5307L13.6033 10.3812L14.4538 12.0839C14.5752 12.3275 14.8244 12.4811 15.0967 12.4811C15.3691 12.4811 15.6174 12.3275 15.7396 12.0839L16.591 10.3812L18.2928 9.5307C18.5363 9.40857 18.6899 9.1601 18.6899 8.88782C18.6899 8.61554 18.5363 8.36707 18.2928 8.24493L16.591 7.39423L15.7396 5.69171C15.4953 5.20465 14.6968 5.20465 14.4538 5.69171L13.6033 7.39423L11.9008 8.24493C11.6572 8.36633 11.5034 8.61554 11.5034 8.88782C11.5034 9.1601 11.6572 9.4093 11.9008 9.5307Z" fill="#1E1E1E"/>
              <path d="M19.4036 3.92377H20.1223V4.64246C20.1223 5.03961 20.4438 5.36115 20.8409 5.36115C21.2381 5.36115 21.5596 5.03961 21.5596 4.64246V3.92377H22.2783C22.6755 3.92377 22.997 3.60242 22.997 3.20508C22.997 2.80792 22.6755 2.48657 22.2783 2.48657H21.5596V1.76788C21.5596 1.37054 21.2381 1.04919 20.8409 1.04919C20.4438 1.04919 20.1223 1.37054 20.1223 1.76788V2.48657H19.4036C19.0064 2.48657 18.6851 2.80792 18.6851 3.20508C18.6851 3.60242 19.0064 3.92377 19.4036 3.92377V3.92377Z" fill="#1E1E1E"/>
              </svg>;
    case 'small_rain_sun':
      return <img src="./small_rain_sun.png"/>;

    default:
        return null;
  }
}