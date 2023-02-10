
function makeForm() {
  const base = document.querySelector('body');
  const container = document.createElement('div');
  const form = document.createElement('form');
  const formGroup = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const slideContainer = document.createElement('div');

  container.className = 'container';
  slideContainer.className = 'container';
  formGroup.className = 'form-group';
  input.setAttribute('type', 'text');
  input.className = 'form-control';
  input.id = 'city';
  input.defaultValue = 'City';
  button.setAttribute('type', 'button');
  button.textContent = 'Check!';
  button.classList = 'btn btn-primary';
  button.id = 'btn';
  slideContainer.id = 'container';

  base.appendChild(container);
  container.appendChild(form);
  form.appendChild(formGroup);
  formGroup.appendChild(input);
  formGroup.appendChild(button);
  base.appendChild(slideContainer);
}

export default makeForm;
