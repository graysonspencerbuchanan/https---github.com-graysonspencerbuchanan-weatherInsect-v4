import getApi from './apiThingy';
import makeSlide from './makeSlide';
import makeForm from './makeForm';
import makeChoice from '../makeChoice';
import makeFrame from './makeFrame';

function index3() {
  makeFrame();
  makeForm();
  makeChoice();
  const button = document.getElementById('btn');
  const form = document.querySelector('form');

  button.onclick = async () => {
    makeSlide(await getApi());
  };


  form.onclick = async () => {
    makeSlide(await getApi());
  };


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getApi().then((response) => makeSlide(response));
  });
}

export default index3;
