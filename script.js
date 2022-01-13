var Scrollbar = window.Scrollbar;

const options = {
  'damping' : 0.07,
}

Scrollbar.init(document.querySelector(".outer-wrapper"), options);