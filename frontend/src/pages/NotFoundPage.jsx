import React from 'react';
import './NotFoundPage.css'

import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <h1 className='not-found__header'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link' to='/'>На главную страницу</Link>
    </div>
  )
}
