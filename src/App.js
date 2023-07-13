import React, { useEffect, useState } from 'react';
// import './App.css';
import planetAPI from './service/RequestAPI';
import PlanetContext from './context/PlanetContext';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const dados = await planetAPI();
      setPlanets(dados);
      setFilterPlanets(dados);
    };

    fetch();
  }, []);

  return (
    <PlanetContext.Provider
      value={ { planets, setPlanets, filterPlanets, setFilterPlanets } }
    >
      <Filters />
      <Table />
    </PlanetContext.Provider>
  );
}

export default App;
