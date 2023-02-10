async function data(...params) {
    const key = '340b8ee9652648db936150741230802';
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${params[0]}&aqi=no`
        // { mode: 'cors' },
      );
      if (response.ok) {
        const getData = await response.json();
        params[1] === 'metric' ? (getData.units = '°C') : (getData.units = '°F');
        return getData;
      }
      return { error: 'Please type in a valid city or zip code' };
    } catch (e) {
      return { error: e };
    }
  }
  
  async function getApi() {
    const input = document.getElementById('city');
    const units = document.querySelector('input[name="unitRadios"]:checked')
      .value;
    const datum = await data(input.value, units);
    return datum;
  }
  
  export default getApi;
  