

function transition() {
 var link = document.createElement("link");
   link.type = "text/css";
   link.rel = "stylesheet";
   link.href = "./assets/styles/styles2.css";
    document.head.appendChild(link);

// CREATE GAME WINDOW
 var gameWindow = document.createElement("div");
  gameWindow.setAttribute("id", "newContainer");
 var getContainer = document.getElementById("container");
  getContainer.appendChild(gameWindow);
//   CREATE MONKEY CONTAINER AND APPEND
 var createContainer1 = document.createElement("div");
  createContainer1.setAttribute("id", "newContainer1");
 var getContainer1 = document.getElementById("newContainer");
  getContainer1.appendChild(createContainer1);
// ADD BUTTON AND APPEND
//  CREATE MONEKY IMAGE 1 AND APPEND
 var addImageMonkey = document.createElement("img");
  addImageMonkey.classList.add("images", "monkey-image");
  addImageMonkey.src = "./assets/images/monkey.jpg";
 var src1 = document.getElementById("newContainer1");
  src1.appendChild(addImageMonkey);
//  CREATE MONKEY IMAGE 2 AND APPEND
 var addImageMonkey = document.createElement("img");
  addImageMonkey.classList.add("images", "monkey-image");
  addImageMonkey.src = "./assets/images/monkey.jpg";
  src1.appendChild(addImageMonkey);
//  CREATE HIPPO CONTAINER AND APPEND
 var createContainer2 = document.createElement("div");
  createContainer2.setAttribute("id", "newContainer2");
 var getContainer1 = document.getElementById("newContainer");
  getContainer1.appendChild(createContainer2);
// CREATE HIPPO IMAGE 1 AND APPEND
 var addImageHippo = document.createElement("img");
  addImageHippo.classList.add("images", "hippo-image");
  addImageHippo.src = "./assets/images/hippo.jpg";
 var src2 = document.getElementById("newContainer2");
  src2.appendChild(addImageHippo);
//  CREATE HIPPO IMAGE 2 AND APPEND
 var addImageHippo = document.createElement("img");
  addImageHippo.classList.add("images", "hippo-image");
  addImageHippo.src = "./assets/images/hippo.jpg";
  src2.appendChild(addImageHippo);
//  CREATE TIGER CONTAINER AND APPEND
 var createContainer3 = document.createElement("div");
  createContainer3.setAttribute("id", "newContainer3");
 var getContainer1 = document.getElementById("newContainer");
  getContainer1.appendChild(createContainer3);
//  CREATE TIGER IMAGE 1 AND APPEND
 var addImageTiger = document.createElement("img");
  addImageTiger.classList.add("images", "tiger-image");
  addImageTiger.src = "./assets/images/tiger.jpg";
 var src3 = document.getElementById("newContainer3");
  src3.appendChild(addImageTiger);
//  CREATE TIGER IMAGE 2 AND APPEND
 var addImageTiger = document.createElement("img");
  addImageTiger.classList.add("images", "tiger-image");
  addImageTiger.src = "./assets/images/tiger.jpg";
  src3.appendChild(addImageTiger);


 deleteButton();
 gameStats();
}

// document.getElementById("hippo-image").addEventListener("click", startGame());

// function startGame() {
// alert("its working");
// }







function gameStats() {
 var statsWindow = document.createElement("div");
  statsWindow.setAttribute("id", "newStatsWindow");
 var getContainer = document.getElementById("container");
  getContainer.appendChild(statsWindow);
// #######################
  var createP = document.createElement("p");
  createP.setAttribute("id", "success-text");
  var getStatsWindow = document.getElementById("newStatsWindow");
  getStatsWindow.appendChild(createP);
  document.getElementById("success-text").textContent += "Successful Matches: 0";
// ########################
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


