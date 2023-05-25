var lngfr = document.querySelector(".lng-fr");
var lngde = document.querySelector(".lng-de");
var lngen = document.querySelector(".lng-en");
var lngopener = document.querySelector(".lng-opener");

var openmenu = function () {
  lngfr.classList.add("lng-selected");
  lngfr.classList.remove("lng-unselected");
  lngde.classList.add("lng-selected");
  lngde.classList.remove("lng-unselected");
  lngen.classList.add("lng-selected");
  lngen.classList.remove("lng-unselected");
  lngopener.classList.add("lng-unselected");
};

var frclose = function () {
  lngde.classList.toggle("lng-selected");
  lngde.classList.toggle("lng-unselected");
  lngen.classList.toggle("lng-selected");
  lngen.classList.toggle("lng-unselected");
  lngopener.classList.remove("lng-unselected");
};

var declose = function () {
  lngfr.classList.toggle("lng-selected");
  lngfr.classList.toggle("lng-unselected");
  lngen.classList.toggle("lng-selected");
  lngen.classList.toggle("lng-unselected");
  lngopener.classList.remove("lng-unselected");
};

var enclose = function () {
  lngde.classList.toggle("lng-selected");
  lngde.classList.toggle("lng-unselected");
  lngfr.classList.toggle("lng-selected");
  lngfr.classList.toggle("lng-unselected");
  lngopener.classList.remove("lng-unselected");
};

var tester = function () {
  lngopener.classList.toggle("js-tester");
};

lngopener.addEventListener("click", openmenu);
lngfr.addEventListener("click", frclose);
lngde.addEventListener("click", declose);
lngen.addEventListener("click", enclose);

var closebtn = document.querySelector(".close-btn");
var openbtn = document.querySelector(".open-btn");
var bignav = document.querySelector(".navigation-mobile");

var openbignav = function () {
  bignav.classList.add("is-visible");
  bignav.classList.remove("is-not-visible");
};

var closemenu = function () {
  bignav.classList.remove("is-visible");
  bignav.classList.add("is-not-visible");
};

closebtn.addEventListener("click", closemenu);
openbtn.addEventListener("click", openbignav);
