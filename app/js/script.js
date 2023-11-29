const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');

const setColorMode = () => {
  console.log('setColorMode');
  console.log(localStorage.getItem('colorMode'));

  if (localStorage.getItem('colorMode') == 'dark') {
    setDarkMode();
    darkBtn.click();
  } else if (localStorage.getItem('colorMode') == 'light') {
    setLightMode();
    lightBtn.click();
  }
};

const checkMode = () => {
  if (localStorage.getItem('colorMode') == null) {
    if (window.matchMedia('(prefers-color-scheme: light)'.match)) {
      lightBtn.click();
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)'.match)) {
      darkBtn.click();
    }
  }
};

const checkModeChange = () => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        //dark mode
        checkMode();
      } else {
        // light mode
      }
    });
};

const setDarkMode = () => {
  console.log('setDarkMode');
  document.querySelector('body').classList = 'dark';
};

const setLightMode = () => {
  console.log('setLightMode');
  document.querySelector('body').classList = 'light';
};

const radioBtns = document.querySelectorAll('.toggle__wrapper input');

setColorMode();
checkMode();
checkModeChange();

radioBtns.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    console.log('radio button clicked');
    if (darkBtn.checked) {
      localStorage.setItem('colorMode', 'dark');
      setDarkMode();
    } else {
      localStorage.setItem('colorMode', 'light');
      setLightMode();
    }
  });
});
