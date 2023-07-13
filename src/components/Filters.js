import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Filters() {
  const { setSearch, categories, setCategories,
    numericFilter, setNumericFilter, finalFilter,
    setFinalFilter } = useContext(PlanetContext);

  const handleNameFilter = ({ target }) => {
    setSearch(target.value);
  };

  const handleColumnFilter = ({ target }) => {
    setNumericFilter({ ...numericFilter, column: target.value });
  };

  const handleComparisonFilter = ({ target }) => {
    setNumericFilter({ ...numericFilter, comparison: target.value });
  };

  const handleValueFilter = ({ target }) => {
    setNumericFilter({ ...numericFilter, num: target.value });
  };

  const handleButtonFilter = () => {
    setFinalFilter((prev) => [...prev, numericFilter]);
    const columnCateg = categories.filter(
      (categ) => categ !== numericFilter.column,
    );
    setCategories(columnCateg);
    setNumericFilter({ ...numericFilter, column: columnCateg[0] });
  };

  const handleDel = (columnCateg) => {
    const del = finalFilter.filter((fil) => fil.column !== columnCateg);
    setCategories((prev) => [...prev, columnCateg]);
    setFinalFilter(del);
  };

  const handleDelAll = () => {
    setFinalFilter([]);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleNameFilter }
        placeholder="Digite o Nome do Planeta"
      />

      <label htmlFor="column-filter">Coluna</label>
      <select
        id="column-filter"
        name="column-filter"
        data-testid="column-filter"
        onChange={ handleColumnFilter }
      >

        {categories.map((category) => (
          <option value={ category } key={ category }>{ category }</option>
        ))}

      </select>

      <label htmlFor="comparison-filter">Comparador</label>
      <select
        id="comparison-filter"
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ handleComparisonFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        value={ numericFilter.num }
        onChange={ handleValueFilter }
        data-testid="value-filter"
      />

      <button
        type="button"
        onClick={ handleButtonFilter }
        data-testid="button-filter"
      >
        Filtrar
      </button>

      <button
        type="button"
        onClick={ () => handleDelAll() }
        data-testid="button-remove-filters"
      >
        Remover Filtros

      </button>

      {finalFilter.map((filter) => (
        <span key={ filter.column }>
          {filter.column}
          {' '}
          {filter.comparison}
          {' '}
          {filter.num}
          <button
            type="button"
            onClick={ () => handleDel(filter.column) }
          >
            Deletar

          </button>
        </span>
      ))}

    </div>
  );
}
