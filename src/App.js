import React from 'react';
// import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetProvider from './context/PlanetProvider';

export default function App() {
  return (
    <PlanetProvider>
      <Filters />
      <Table />
    </PlanetProvider>
  );
}
