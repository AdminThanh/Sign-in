import logo from './logo.svg';
import './App.css';
import './assets/styles/main.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routers/routes';

function App() {
  console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          let Element = route.element;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Element />
              }
            />
          );
          // }
        })}
        <Route path="home" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
