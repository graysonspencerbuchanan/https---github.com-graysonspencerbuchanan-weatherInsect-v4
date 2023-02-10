async function makeSlide(data) {
  const slide = document.createElement('div');
  const slideBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const parent = document.getElementById('container');
  const imgCont = document.createElement('div');
  const img = new Image();

  if (data.error) {
    slide.className = 'card';
    slideBody.className = 'card-body';
    h5.className = 'card-title';
    h5.textContent = `${data.error}`;
    slide.appendChild(cardBody);
    slideBody.appendChild(h5);
    if (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
    parent.appendChild(slide);
    return;
  }

  slide.className = 'slide';
  slideBody.className = 'slide-body';
  h5.className = 'slide-title';
  h5.textContent = `${data.location.name},  ${data.location.country}`;
  h6.classList = 'slide-subtitle mb-2';
  
  if (data.units == '°C') {
    h6.textContent = `Current temperature: ${data.current.temp_c} ${data.units}`;
    p1.textContent = `Feels Like: ${data.current.feelslike_c} ${data.units}`;
    p2.textContent = `Max: ${data.forecast.forecastday.day.maxtemp_c} ${data.units}, Min: ${data.forecast.forecastday.day.mintemp_c} ${data.units}`;
  } else {
    h6.textContent = `Current temperature: ${data.current.temp_f} ${data.units}`;
    p1.textContent = `Feels Like: ${data.current.feelslike_f} ${data.units}`;
    p2.textContent = `Max: ${data.forecast.forecastday.day.maxtemp_f} ${data.units}, Min: ${data.forecast.forecastday.day.mintemp_f} ${data.units}`;
  }
  p1.classList = 'slide-text';
  p2.classList = 'slide-text';
  imgCont.id = 'img-container';
  imgCont.textContent = data.forecast.forecastday.day.condition.text;
  img.src = data.forecast.forecastday.day.condition.icon;

  slide.appendChild(slideBody);
  slideBody.appendChild(h5);
  slideBody.appendChild(h6);
  slideBody.appendChild(p1);
  slideBody.appendChild(p2);
  slideBody.appendChild(imgCont);
  imgCont.appendChild(img);

  if (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
  parent.appendChild(slide);
}

export default makeSlide;
