import React from 'react';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <Outlet />
    </>
  );
}
