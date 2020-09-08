let familyToggleStatus = true;

let familyToggle = function () {
  let toggleEl = document.querySelector(".fToggleDis");
  if (familyToggleStatus === true) {
    toggleEl.style.opacity = "1";
    familyToggleStatus = false;
  } else if (familyToggleStatus === false) {
    toggleEl.style.opacity = "0";
    familyToggleStatus = true;
  }
}

let familyToggle2 = function () {
  let toggleEl2 = document.querySelector(".fToggleDis2");
  if (familyToggleStatus === true) {
    toggleEl2.style.opacity = "1";
    familyToggleStatus = false;
  } else if (familyToggleStatus === false) {
    toggleEl2.style.opacity = "0";
    familyToggleStatus = true;
  }
}