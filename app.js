
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

// Italy

  const italy = document.querySelector('.italy');
  const italyGreen = document.querySelector('.italy-green');
  const italyWhite = document.querySelector('.italy-white');
  const italyRed = document.querySelector('.italy-red');

  // Ireland

    const ireland = document.querySelector('.ireland');
    const irelandGreen = document.querySelector('.ireland-green');
    const irelandWhite = document.querySelector('.ireland-white');
    const irelandOrange = document.querySelector('.ireland-orange');

  // Ireland

    const nigeria = document.querySelector('.nigeria');
    const nigeriaGreen = document.querySelector('.nigeria-green');
    const nigeriaWhite = document.querySelector('.nigeria-white');
    const nigeriaGreen2 = document.querySelector('.nigeria-green2');

  // Russia

    const russia = document.querySelector('.russia');
    const russiaWhite = document.querySelector('.russia-white');
    const russiaBlue = document.querySelector('.russia-blue');
    const russiaRed = document.querySelector('.russia-red');

  // Yemen

    const yemen = document.querySelector('.yemen');
    const yemenRed = document.querySelector('.yemen-red');
    const yemenWhite = document.querySelector('.yemen-white');
    const yemenBlack = document.querySelector('.yemen-black');

  // Netherlands

    const netherlands = document.querySelector('.netherlands');
    const netherlandsRed = document.querySelector('.netherlands-red');
    const netherlandsWhite = document.querySelector('.netherlands-white');
    const netherlandsBlue = document.querySelector('.netherlands-blue');

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

// if Italy is selected - opacity

if (selectCountry.value === '4') {
  counter +=1;
  italy.style.opacity = "1";
  italy.style.zIndex = counter;
  italyGreen.style.backgroundColor = "rgb(0, 140, 69)";
  italyWhite.style.backgroundColor = "rgb(244, 245, 240)";
  italyRed.style.backgroundColor = "rgb(205, 33, 42)";

}

// if Ireland is selected - opacity

if (selectCountry.value === '5') {
  counter +=1;
  ireland.style.opacity = "1";
  ireland.style.zIndex = counter;
  irelandGreen.style.backgroundColor = "rgb(22,155,98)";
  irelandWhite.style.backgroundColor = "rgb(255,255,255)";
  irelandOrange.style.backgroundColor = "rgb(255, 130, 0)";

}

// if nigeria is selected - opacity

if (selectCountry.value === '6') {
  counter +=1;
  nigeria.style.opacity = "1";
  nigeria.style.zIndex = counter;
  nigeriaGreen.style.backgroundColor = "rgb(0, 150, 57)";
  nigeriaWhite.style.backgroundColor = "rgb(255,255,255)";
  nigeriaGreen2.style.backgroundColor = "rgb(0, 150, 57)";

}

// if russia is selected - opacity

if (selectCountry.value === '7') {
  counter +=1;
  russia.style.opacity = "1";
  russia.style.zIndex = counter;
  russiaWhite.style.backgroundColor = "rgb(255, 255, 255)";
  russiaBlue.style.backgroundColor = "rgb(0, 51, 160)";
  russiaRed.style.backgroundColor = "rgb(218, 41, 28)";

}

// if yemen is selected - opacity

if (selectCountry.value === '8') {
  counter +=1;
  yemen.style.opacity = "1";
  yemen.style.zIndex = counter;
  yemenRed.style.backgroundColor = "rgb(206, 17, 38)";
  yemenWhite.style.backgroundColor = "rgb(255, 255, 255)";
  yemenBlack.style.backgroundColor = "rgb(0, 0, 0)";

}

// if netherlands is selected - opacity

if (selectCountry.value === '9') {
  counter +=1;
  netherlands.style.opacity = "1";
  netherlands.style.zIndex = counter;
  netherlandsRed.style.backgroundColor = "rgb(174, 28, 40)";
  netherlandsWhite.style.backgroundColor = "rgb(255, 255, 255)";
  netherlandsBlue.style.backgroundColor = "rgb(33, 70, 139)";

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

  // if Italy is selected - change color

  if (selectCountry.value === '4') {

    italyGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    italyWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    italyRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Ireland is selected - change color

  if (selectCountry.value === '5') {

    irelandGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    irelandWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    irelandOrange.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Nigeria is selected - change color

  if (selectCountry.value === '6') {

    nigeriaGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    nigeriaWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    nigeriaGreen2.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Russia is selected - change color

  if (selectCountry.value === '7') {

    russiaWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    russiaBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    russiaRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Yemen is selected - change color

  if (selectCountry.value === '8') {

    yemenRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    yemenWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    yemenBlack.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Netherlands is selected - change color

  if (selectCountry.value === '9') {

    netherlandsRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    netherlandsWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    netherlandsBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }









})
