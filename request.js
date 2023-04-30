var popupButton = document.getElementById("popup-button");
var popupOverlay = document.getElementById("popup-request_overlay");
var popupClose = document.getElementById("popup-request_close");

popupButton.onclick = function() {
  popupOverlay.style.display = "block";
}

popupClose.onclick = function() {
  popupOverlay.style.display = "none";
}
