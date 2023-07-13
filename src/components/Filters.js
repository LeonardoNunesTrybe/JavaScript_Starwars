import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Filters() {
  const { planets, filterPlanets, setFilterPlanets } = useContext(PlanetContext);

  const handleNameFilter = ({ target }) => {
    const filterName = planets.filter((planet) => (planet.name)
      .includes(target.value));

    setFilterPlanets(filterName);
  };

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleNameFilter } />
    </div>
  );
}
