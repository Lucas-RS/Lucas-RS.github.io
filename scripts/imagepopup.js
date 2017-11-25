var popupContainer = document.getElementById('imagepopup');
var popupImg = document.getElementById('imagepopup__image');
var popupTitle = document.getElementById('imagepopup__title');
var popupClose = document.getElementById('imagepopup__close');
var popupIsOpen = false;

function checkWinDims() {
  if (popupImg.naturalWidth / popupImg.naturalHeight > window.innerWidth / window.innerHeight) {
    popupImg.style.height = "auto";
    popupImg.style.width = "calc(100vw - 100px)";
  } else {
    popupImg.style.height = "calc(100vh - 100px)";
    popupImg.style.width = "auto";
  }
}

function imgPopUp (imgElem) {
  popupContainer.style.display = "block";
  popupTitle.innerHTML = imgElem.alt;
  popupImg.src = imgElem.src;
  popupIsOpen = true;
  checkWinDims();
}

popupImg.onmouseover = function () {
  popupTitle.style.opacity = "1";
}

popupImg.onmouseleave = function () {
  popupTitle.style.opacity = "0";
}

popupClose.onclick = function () {
  popupContainer.style.display = "none";
  popupIsOpen = false;
}

window.onresize = function () {
  if (popupIsOpen) {
    checkWinDims();
  }
}
