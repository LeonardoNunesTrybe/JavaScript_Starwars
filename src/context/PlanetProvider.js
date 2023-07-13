import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';
import planetAPI from '../service/RequestAPI';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [categories, setCategories] = useState(
    [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ],
  );
  const [numericFilter, setNumericFilter] = useState({
    column: categories[0],
    comparison: 'maior que',
    num: '0',
  });
  const [finalFilter, setFinalFilter] = useState([]);
  const [filterDel, setFilterDel] = useState();

  useEffect(() => {
    const fetch = async () => {
      const dados = await planetAPI();
      setPlanets(dados);
      setFilterPlanets(dados);
    };

    fetch();
  }, []);

  useEffect(() => {
    const filtered = planets.filter((planet) => planet.name
      .toLowerCase().includes(search));
    setFilterPlanets(filtered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const context = {
    planets,
    setPlanets,
    search,
    setSearch,
    filterPlanets,
    setFilterPlanets,
    categories,
    setCategories,
    numericFilter,
    setNumericFilter,
    finalFilter,
    setFinalFilter,
    filterDel,
    setFilterDel,
  };

  return (
    <PlanetContext.Provider value={ context }>{children}</PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
