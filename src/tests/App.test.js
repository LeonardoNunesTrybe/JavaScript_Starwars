import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

jest.setTimeout(10000)

test('Verifica se o componente Filters esta renderizado na página', async () => {
  render(<App />);
  const nameFilter = screen.getByTestId('name-filter');
  expect(nameFilter).toBeInTheDocument();
  userEvent.type(nameFilter, 'teste');
  expect(nameFilter.value).toBe('teste');

  // const hoth = screen.getByText('Hoth');
  // userEvent.type(nameFilter, 'Alderaan');
  // expect(hoth).not.toBeInTheDocument();

  const columnFilter = screen.getByTestId('column-filter')
  expect(columnFilter).toBeInTheDocument();

  const compoarisonFilter = screen.getByTestId('comparison-filter')
  expect(compoarisonFilter).toBeInTheDocument();

  const valueFilter = screen.getByTestId('value-filter')
  expect(valueFilter).toBeInTheDocument();
  userEvent.type(valueFilter, '2');
  expect(valueFilter.value).toBe('02');

  const buttonFilter = screen.getByTestId('button-filter')
  expect(buttonFilter).toBeInTheDocument();
  userEvent.click(buttonFilter);

  const buttonRemoveFilters = screen.getByTestId('button-remove-filters')
  expect(buttonRemoveFilters).toBeInTheDocument();
  userEvent.click(buttonRemoveFilters);

  // const btnFilter = screen.getByTestId('filter')
  // expect(btnFilter).toBeInTheDocument();
  // userEvent.click(btnFilter);

  userEvent.selectOptions(columnFilter, 'diameter');
  userEvent.selectOptions(compoarisonFilter, 'menor que');
  userEvent.type(valueFilter, '10000');
  userEvent.click(buttonFilter);
  // const alderaan = screen.getByText('Alderaan')
  // expect(alderaan).toBeInTheDocument();

});

test('Verifica se o componente Table esta renderizado na página', async () => {
  render(<App />);
  await waitFor(() => {
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const planet1 = screen.getByText(/Tatooine/i);
    expect(planet1).toBeInTheDocument();

    const column1 = screen.getByText(/url/i);
    expect(column1).toBeInTheDocument();
  }, { timeout: 10000 });

  const planet1 = screen.getByText(/Tatooine/i);
  const nameFilter = screen.getByTestId('name-filter');
  expect(nameFilter).toBeInTheDocument();

  const columnFilter = screen.getByTestId('column-filter')
  const compoarisonFilter = screen.getByTestId('comparison-filter')
  const valueFilter = screen.getByTestId('value-filter')
  const buttonFilter = screen.getByTestId('button-filter')

  userEvent.selectOptions(columnFilter, 'population');
  userEvent.selectOptions(compoarisonFilter, 'maior que')
  userEvent.type(valueFilter, '4500000000');
  userEvent.click(buttonFilter);

  const planet2 = screen.getByText(/Coruscant/i);
  expect(planet2).toBeInTheDocument();
  expect(planet1).not.toBeInTheDocument();

  userEvent.selectOptions(columnFilter, 'rotation_period');
  userEvent.selectOptions(compoarisonFilter, 'menor que');
  userEvent.type(valueFilter, '3');
  userEvent.click(buttonFilter);

  expect(planet2).toBeInTheDocument();

  const name = screen.getByText('Name');
  const rotation = screen.getByText('Rotation Period');
  const orbital = screen.getByText('Orbital Period');
  const diameter = screen.getByText('Diameter');
  const climate = screen.getByText('Climate');
  const gravity = screen.getByText('Gravity');
  const terrain = screen.getByText('Terrain');
  const surface = screen.getByText('Surface Water');
  const population = screen.getByText('Population');
  const films = screen.getByText('Films');
  const created = screen.getByText('Created');
  const edited = screen.getByText('Edited');
  const url = screen.getByText('URL');

  expect(name).toBeInTheDocument();
  expect(rotation).toBeInTheDocument();
  expect(orbital).toBeInTheDocument();
  expect(diameter).toBeInTheDocument();
  expect(climate).toBeInTheDocument();
  expect(gravity).toBeInTheDocument();
  expect(terrain).toBeInTheDocument();
  expect(surface).toBeInTheDocument();
  expect(population).toBeInTheDocument();
  expect(films).toBeInTheDocument();
  expect(created).toBeInTheDocument();
  expect(edited).toBeInTheDocument();
  expect(url).toBeInTheDocument();
});

test('Verifica os botões', async () => {
  render(
    <App />
  );
  await waitFor(() => {
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

    const planet1 = screen.getByText(/Tatooine/i);
    expect(planet1).toBeInTheDocument();

    const column1 = screen.getByText(/url/i);
    expect(column1).toBeInTheDocument();
  }, { timeout: 10000 });

  const columnFilter = screen.getByTestId('column-filter')
  const compoarisonFilter = screen.getByTestId('comparison-filter')
  const valueFilter = screen.getByTestId('value-filter')
  const buttonFilter = screen.getByTestId('button-filter')

  userEvent.selectOptions(columnFilter, 'population');
  userEvent.selectOptions(compoarisonFilter, 'igual a')
  userEvent.type(valueFilter, '1000');
  userEvent.click(buttonFilter);

  const delBtn = screen.getByText(/Deletar/i);
  expect(delBtn).toBeInTheDocument();

  userEvent.click(delBtn);
  expect(delBtn).not.toBeInTheDocument();
})
