const loadScriptsFrom = (path, files) => {
  files.forEach(file => {
    const script = document.createElement('script');
    script.src = `${path}/${file}`;
    script.defer = true;
    document.head.appendChild(script);
  });
};

loadScriptsFrom('./components/selects', ['y-select.js']);