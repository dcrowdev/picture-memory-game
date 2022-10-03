successfulMatches = 0;
failedMatches = 0;

function transition() {
  deleteButton();
 var link = document.createElement("link");
   link.type = "text/css";
   link.rel = "stylesheet";
   link.href = "./assets/styles/styles2.css";
    document.head.appendChild(link);
//  CREATE MONEKY IMAGE 1 AND APPEND
 var addImageMonkey1 = document.createElement("img");
  addImageMonkey1.classList.add("images", "monkey-image");
  addImageMonkey1.setAttribute("id", "monkey-image-1");
  addImageMonkey1.src = "./assets/images/greenbox.png";
 var src1 = document.getElementById("newContainer1");
  src1.appendChild(addImageMonkey1);
  addImageMonkey1.setAttribute("onClick", "image1Clicked()");
//  CREATE MONKEY IMAGE 2 AND APPEND
 var addImageMonkey2 = document.createElement("img");
  addImageMonkey2.classList.add("images", "monkey-image");
  addImageMonkey2.src = "./assets/images/greenbox.png";
  addImageMonkey2.setAttribute("id", "monkey-image-2");
  src1.appendChild(addImageMonkey2);
  addImageMonkey2.setAttribute("onClick", "image2Clicked()");
// CREATE HIPPO IMAGE 1 AND APPEND
 var addImageHippo1 = document.createElement("img");
  addImageHippo1.classList.add("images", "hippo-image");
  addImageHippo1.setAttribute("id", "hippo-image-1");
  addImageHippo1.src = "./assets/images/greenbox.png";
 var src2 = document.getElementById("newContainer2");
  src2.appendChild(addImageHippo1);
  addImageHippo1.setAttribute("onClick", "image3Clicked()");
//  CREATE HIPPO IMAGE 2 AND APPEND
 var addImageHippo2 = document.createElement("img");
  addImageHippo2.classList.add("images", "hippo-image");
  addImageHippo2.src = "./assets/images/greenbox.png";
  addImageHippo2.setAttribute("id", "hippo-image-2");
  src2.appendChild(addImageHippo2);
  addImageHippo2.setAttribute("onClick", "image4Clicked()");
//  CREATE TIGER IMAGE 1 AND APPEND
 var addImageTiger1 = document.createElement("img");
  addImageTiger1.classList.add("images", "tiger-image");
  addImageTiger1.setAttribute("id", "tiger-image-1");
  addImageTiger1.src = "./assets/images/greenbox.png";
 var src3 = document.getElementById("newContainer3");
  src3.appendChild(addImageTiger1);
  addImageTiger1.setAttribute("onClick", "image5Clicked()");
//  CREATE TIGER IMAGE 2 AND APPEND
 var addImageTiger2 = document.createElement("img");
  addImageTiger2.classList.add("images", "tiger-image");
  addImageTiger2.src = "./assets/images/greenbox.png";
  addImageTiger2.setAttribute("id", "tiger-image-2");
  src3.appendChild(addImageTiger2);
  addImageTiger2.setAttribute("onClick", "image6Clicked()");
//  APPEND GAME STATS -- SUCCESSFUL MATCHES
 var createP = document.createElement("p");
  createP.setAttribute("id", "success-text");
 var getStatsWindow = document.getElementById("newStatsWindow");
  getStatsWindow.appendChild(createP);
  document.getElementById("success-text").textContent += "Successful Matches: 0";
//  APPEND GAME STATS -- FAILED MATCHES
 var createP2 = document.createElement("p");
  createP2.setAttribute("id", "failedMatch-text");
 var getStatsWindow = document.getElementById("newStatsWindow");
  getStatsWindow.appendChild(createP2);
  document.getElementById("failedMatch-text").textContent += "Failed Matches: 0";

}



function deleteButton() {
var deletion = document.getElementById("playgame");
deletion.remove();
}



var monkey1clicked = false;
var monkey2clicked = false;
var hippo1clicked = false;
var hippo2clicked = false;
var tiger1clicked = false;
var tiger2clicked = false;

function image1Clicked() {
document.getElementById("monkey-image-1").addEventListener("click", swapImagesMonkey1());
// document.getElementById("monkey-image-1").removeAttribute("src");
// document.getElementById("monkey-image-1").setAttribute("src", "./assets/images/greenbox.png");
}

function image2Clicked() {
document.getElementById("monkey-image-2").addEventListener("click", swapImagesMonkey2());
}

function image3Clicked() {
document.getElementById("hippo-image-1").addEventListener("click", swapImagesHippo1());
}

function image4Clicked() {
document.getElementById("hippo-image-2").addEventListener("click", swapImagesHippo2());
}

function image5Clicked() {
document.getElementById("tiger-image-1").addEventListener("click", swapImagesTiger1());
}

function image6Clicked() {
document.getElementById("tiger-image-2").addEventListener("click", swapImagesTiger2());
}

function swapImagesMonkey1() {
var changeMonkey1 = document.getElementById("monkey-image-1");
changeMonkey1.removeAttribute("src");
changeMonkey1.setAttribute("src", "./assets/images/monkey.jpg");
monkey1clicked = true;
if (monkey2clicked) {
  successfulMatches++;
 } else if (hippo1clicked) {
  failedMatches++;
  changeMonkey1.removeAttribute("src");
  changeMonkey1.setAttribute("src", "./assets/images/greenbox.png");
  monkey1clicked = false;
 }
}

function swapImagesMonkey2() {
var changeMonkey2 = document.getElementById("monkey-image-2");
changeMonkey2.removeAttribute("src");
changeMonkey2.setAttribute("src", "./assets/images/monkey.jpg");
monkey2clicked = true;
if (monkey1clicked) {
  successfulMatches++;
 } else {
  failedMatches++;
 }
 console.log(successfulMatches, failedMatches);
}

function swapImagesHippo1() {
var changeHippo1 = document.getElementById("hippo-image-1");
changeHippo1.removeAttribute("src");
changeHippo1.setAttribute("src", "./assets/images/hippo.jpg");
hippo1clicked = true;
if (hippo2clicked) {
  successfulMatches++;
 } else {
  failedMatches++;
 }
 console.log(successfulMatches, failedMatches);
}

function swapImagesHippo2() {
var changeHippo2 = document.getElementById("hippo-image-2");
changeHippo2.removeAttribute("src");
changeHippo2.setAttribute("src", "./assets/images/hippo.jpg");
hippo2clicked = true;
if (hippo1clicked) {
  successfulMatches++;
 } else {
  failedMatches++;
 }
 console.log(successfulMatches, failedMatches);
}

function swapImagesTiger1() {
var changeTiger1 = document.getElementById("tiger-image-1");
changeTiger1.removeAttribute("src");
changeTiger1.setAttribute("src", "./assets/images/tiger.jpg");
tiger1clicked = true;
if (tiger2clicked) {
  successfulMatches++;
 } else {
  failedMatches++;
 }
 console.log(successfulMatches, failedMatches);
}

function swapImagesTiger2() {
var changeTiger2 = document.getElementById("tiger-image-2");
changeTiger2.removeAttribute("src");
changeTiger2.setAttribute("src", "./assets/images/tiger.jpg");
tiger2clicked = true;
if (tiger1clicked) {
  successfulMatches++;
 } else {
  failedMatches++;
 }
 console.log(successfulMatches, failedMatches);
}


function checks () {

}