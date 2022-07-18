let rnumber = document.querySelector(".rcolor");
let gnumber = document.querySelector(".gcolor");
let bnumber = document.querySelector(".bcolor");
let submitBtn = document.querySelector(".convert");
let sbr = document.querySelector(".smallblockr");
let sbg = document.querySelector(".smallblockg");
let sbb = document.querySelector(".smallblockb");
let hexblock = document.querySelector(".hexblock");
let hexcolor = document.querySelector(".hexcolor");
let skill = document.querySelector(".skill");

function FsubmitBtn() {
  let rsubmitValue = Number(rnumber.value);
  let gsubmitValue = Number(gnumber.value);
  let bsubmitValue = Number(bnumber.value);
  let sixr = rsubmitValue.toString(16);
  let sixg = gsubmitValue.toString(16);
  let sixb = bsubmitValue.toString(16);
  let six = `#${sixr.padStart(2, "0")}${sixg.padStart(2, "0")}${sixb.padStart(
    2,
    "0"
  )}`;
  skill.style["background-color"] = six;
  hexcolor.innerText = six;
}

submitBtn.addEventListener("click", FsubmitBtn);