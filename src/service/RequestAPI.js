const planetAPI = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const { results } = await response.json();
  results.map((planet) => delete planet.residents);
  return results;
};

export default planetAPI;
