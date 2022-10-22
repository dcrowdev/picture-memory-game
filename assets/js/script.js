let tiger1 = document.createElement('img');
tiger1.setAttribute('src', './assets/images/tiger.jpg');
tiger1.setAttribute('data-type', 'tiger');
tiger1.classList.add('covered', 'image-list');
let tiger2 = document.createElement('img');
tiger2.setAttribute('src', './assets/images/tiger2.jpg');
tiger2.setAttribute('data-type', 'tiger');
tiger2.classList.add('covered', 'image-list');
let monkey1 = document.createElement('img');
monkey1.setAttribute('src', './assets/images/monkey.jpg');
monkey1.setAttribute('data-type', 'monkey');
monkey1.classList.add('covered', 'image-list');
let monkey2 = document.createElement('img');
monkey2.setAttribute('src', './assets/images/monkey2.jpg');
monkey2.setAttribute('data-type', 'monkey');
monkey2.classList.add('covered', 'image-list');
let hippo1 = document.createElement('img');
hippo1.setAttribute('src', './assets/images/hippo.jpg');
hippo1.setAttribute('data-type', 'hippo');
hippo1.classList.add('covered', 'image-list');
let hippo2 = document.createElement('img');
hippo2.setAttribute('src', './assets/images/hippo2.jpg');
hippo2.setAttribute('data-type', 'hippo');
hippo2.classList.add('covered', 'image-list');


let imgArr = [tiger1, tiger2, monkey1, monkey2, hippo1, hippo2]
let container = document.getElementById('container')
let startBtn = document.getElementById('playgame')
let valueHolderArr = [];

function shuffleImages(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
let newImgArr = shuffleImages(imgArr);

startBtn.addEventListener('click', function () {
  startBtn.remove();
  for (let i = 0; i < newImgArr.length; i++) {
    container.appendChild(newImgArr[i]);
  }
});

function checkClicked(event) {
  if (event.target.nodeName == "IMG") {
    imageClicked(event);
  }
}

function imageClicked(event) {
  event.target.classList.remove('covered');
  event.target.classList.add('uncovered');
  valueHolderArr.push(event.target.dataset.type)
  if (valueHolderArr.length > 1) {
    compareValues(valueHolderArr[0], valueHolderArr[1])
    valueHolderArr = [];
  }
  return;
}

function compareValues(value1, value2) {
  if (value1 === value2) {
    setTimeout(matchAlert, 1000);
    console.log(newImgArr)
    setTimeout(removeUncovered, 2000);
  } else {
  setTimeout(noMatchAlert, 1000);
  setTimeout(checkValArrLength, 1000)
}
}

function matchAlert() {
  alert('match!');
}

function noMatchAlert() {
  alert('sorry no match!');
}

function checkValArrLength() {
  let imageList = document.getElementsByClassName('image-list')
  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].classList.contains('uncovered')) {
      imageList[i].classList.remove('uncovered');
      imageList[i].classList.add('covered');
    }
  }
}


function removeUncovered() {
  for (let i = 0; i < newImgArr.length; i++) {
    if (newImgArr[i].classList.contains('uncovered')) {
      newImgArr[i].classList.add('unclickable');
      newImgArr[i].classList.remove('uncovered')
    }
  }
}

container.addEventListener('click', checkClicked);
