
// select country

const selectCountry = document.querySelector('.pick-country');


// change color button

const changeColorBtn = document.querySelector('.change-color');


// random number generator

function randomNum() {
  return Math.floor((Math.random() * 255) + 1);
}


// France

  const france = document.querySelector('.france');
  const franceBlue = document.querySelector('.france-blue');
  const franceWhite = document.querySelector('.france-white');
  const franceRed = document.querySelector('.france-red');

//

// Belgium

  const belgium = document.querySelector('.belgium');
  const belgiumBlack = document.querySelector('.belgium-black');
  const belgiumYellow = document.querySelector('.belgium-yellow');
  const belgiumRed = document.querySelector('.belgium-red');

//

// Côte d'Ivore

  const cote = document.querySelector('.cote');
  const coteOrange = document.querySelector('.cote-orange');
  const coteWhite = document.querySelector('.cote-white');
  const coteGreen = document.querySelector('.cote-green');


// counter for every time a country is selected

var counter = 0;


// SELECT COUNTRY EVENT LISTENER

selectCountry.addEventListener('change', () => {



  // if France is selected - opacity

  if (selectCountry.value === '1') {
    counter +=1;
    france.style.opacity = "1";
    france.style.zIndex = counter;
    franceBlue.style.backgroundColor = "rgb(0,85,164)";
    franceWhite.style.backgroundColor = "rgb(255, 255, 255)";
    franceRed.style.backgroundColor = "rgb(239,65,53)";

}

// if Belgium is selected - opacity

if (selectCountry.value === '2') {
  counter +=1;
  belgium.style.opacity = "1";
  belgium.style.zIndex = counter;
  belgiumBlack.style.backgroundColor = "rgb(0, 0, 0)";
  belgiumYellow.style.backgroundColor = "rgb(253, 218, 36)";
  belgiumRed.style.backgroundColor = "rgb(239, 51, 64)";


}

// if Côte d'Ivore is selected - opacity

if (selectCountry.value === '3') {
  counter +=1;
  cote.style.opacity = "1";
  cote.style.zIndex = counter;
  coteOrange.style.backgroundColor = "rgb(247, 127, 0)";
  coteWhite.style.backgroundColor = "rgb(255, 255, 255)";
  coteGreen.style.backgroundColor = "rgb(0, 158, 96)";

}

})


// CHANGE COLOR EVENT LISTENER

changeColorBtn.addEventListener('click', () => {

// if France is selected - change color

  if (selectCountry.value === '1') {

    franceBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    franceWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    franceRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Belgium is selected - change color

  if (selectCountry.value === '2') {

    belgiumBlack.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    belgiumYellow.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    belgiumRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Côte d'Ivore is selected - change color

  if (selectCountry.value === '3') {

    coteOrange.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    coteWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    coteGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }








})
