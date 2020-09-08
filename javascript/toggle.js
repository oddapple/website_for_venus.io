let toggleStatus = true;

let makeToggle = function () {
  let getWrapper = document.querySelector(".toggle-wraper");
  let getToggleButton = document.querySelector(".toggle-button");

  if (toggleStatus === true) {
    getWrapper.style.opacity = "1";
    getToggleButton.style.opacity = "1";
    toggleStatus = false;
  } else if (toggleStatus === false) {
    getWrapper.style.opacity = "0";
    getToggleButton.style.opacity = "1";
    toggleStatus = true;
  }

}