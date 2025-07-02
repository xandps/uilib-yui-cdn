document.querySelectorAll('.y-select-wrapper').forEach(wrapper => {
  const select = wrapper.querySelector('.y-select');
  const selected = wrapper.querySelector('.y-selected');
  const optionsContainer = wrapper.querySelector('.y-option-container');
  const options = wrapper.querySelectorAll('.y-option');
  const hiddenInput = wrapper.querySelector('input[type="hidden"]');

  if (!select || !selected || !optionsContainer || !hiddenInput) return;

  select.addEventListener('click', () => {
    optionsContainer.classList.toggle('show');
    select.classList.toggle('active');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      const value = option.dataset.value;
      const text = option.textContent;

      selected.textContent = text;
      hiddenInput.value = value;

      optionsContainer.classList.remove('show');
      select.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      optionsContainer.classList.remove('show');
      select.classList.remove('active');
    }
  });
});

console.log('YUILib JS carregado');