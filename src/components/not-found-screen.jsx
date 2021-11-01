import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

const NotFoundScreen = () => {
  return (
    <>
      <h1 style={{ gridColumn: "1 / -1", textAlign: "center" }}>404. Not found</h1>
      <Link to={AppRoute.MAIN} style={{ gridColumn: "1 / -1", textAlign: "center" }}>Вернуться на главную страницу</Link>
    </>
  );
};

export default NotFoundScreen;