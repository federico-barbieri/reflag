
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

  // Luxembourg

    const luxembourg = document.querySelector('.luxembourg');
    const luxembourgRed = document.querySelector('.luxembourg-red');
    const luxembourgWhite = document.querySelector('.luxembourg-white');
    const luxembourgBlue = document.querySelector('.luxembourg-blue');

  // Hungary

      const hungary = document.querySelector('.hungary');
      const hungaryRed = document.querySelector('.hungary-red');
      const hungaryWhite = document.querySelector('.hungary-white');
      const hungaryGreen = document.querySelector('.hungary-green');

  // Gabon

      const gabon = document.querySelector('.gabon');
      const gabonGreen = document.querySelector('.gabon-green');
      const gabonYellow = document.querySelector('.gabon-yellow');
      const gabonBlue = document.querySelector('.gabon-blue');

  // Germany

      const germany = document.querySelector('.germany');
      const germanyBlack = document.querySelector('.germany-black');
      const germanyRed = document.querySelector('.germany-red');
      const germanyYellow = document.querySelector('.germany-yellow');

  // Bulgaria

          const bulgaria = document.querySelector('.bulgaria');
          const bulgariaWhite = document.querySelector('.bulgaria-white');
          const bulgariaGreen = document.querySelector('.bulgaria-green');
          const bulgariaRed = document.querySelector('.bulgaria-red');

  // Austria

          const austria = document.querySelector('.austria');
          const austriaRed = document.querySelector('.austria-red');
          const austriaWhite = document.querySelector('.austria-white');
          const austriaRed2 = document.querySelector('.austria-red2');

  // Armenia

          const armenia = document.querySelector('.armenia');
          const armeniaRed = document.querySelector('.armenia-red');
          const armeniaBlue = document.querySelector('.armenia-blue');
          const armeniaYellow = document.querySelector('.armenia-yellow');

  // Estonia

          const estonia = document.querySelector('.estonia');
          const estoniaBlue = document.querySelector('.estonia-blue');
          const estoniaBlack = document.querySelector('.estonia-black');
          const estoniaWhite = document.querySelector('.estonia-white');

  // Lithuania

          const lithuania = document.querySelector('.lithuania');
          const lithuaniaYellow = document.querySelector('.lithuania-yellow');
          const lithuaniaGreen = document.querySelector('.lithuania-green');
          const lithuaniaRed = document.querySelector('.lithuania-red');

  // Ukraine

          const ukraine = document.querySelector('.ukraine');
          const ukraineBlue = document.querySelector('.ukraine-blue');
          const ukraineYellow = document.querySelector('.ukraine-yellow');

  // Poland

          const poland = document.querySelector('.poland');
          const polandWhite = document.querySelector('.poland-white');
          const polandRed = document.querySelector('.poland-red');

  // Japan

                  const japan = document.querySelector('.japan');
                  const japanWhite = document.querySelector('.japan-white');
                  const japanRed = document.querySelector('.japan-red');

//
//
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

// if luxembourg is selected - opacity

if (selectCountry.value === '10') {
  counter +=1;
  luxembourg.style.opacity = "1";
  luxembourg.style.zIndex = counter;
  luxembourgRed.style.backgroundColor = "rgb(239,51,64)";
  luxembourgWhite.style.backgroundColor = "rgb(255, 255, 255)";
  luxembourgBlue.style.backgroundColor = "rgb(0,163,224)";

}

// if hungary is selected - opacity

if (selectCountry.value === '11') {
  counter +=1;
  hungary.style.opacity = "1";
  hungary.style.zIndex = counter;
  hungaryRed.style.backgroundColor = "rgb(200,16,46)";
  hungaryWhite.style.backgroundColor = "rgb(255, 255, 255)";
  hungaryGreen.style.backgroundColor = "rgb(0,132,61)";

}

// if gabon is selected - opacity

if (selectCountry.value === '12') {
  counter +=1;
  gabon.style.opacity = "1";
  gabon.style.zIndex = counter;
  gabonGreeen.style.backgroundColor = "rgb(0,150,57)";
  gabonYellow.style.backgroundColor = "rgb(255,209,0)";
  gabonBlue.style.backgroundColor = "rgb(0,61,165)";

}

// if germany is selected - opacity

if (selectCountry.value === '13') {
  counter +=1;
  germany.style.opacity = "1";
  germany.style.zIndex = counter;
  germanyBlack.style.backgroundColor = "rgb(0, 0, 0)";
  germanyRed.style.backgroundColor = "rgb(221, 0, 0)";
  germanyYellow.style.backgroundColor = "rgb(255, 206, 0)";

}

// if bulgaria is selected - opacity

if (selectCountry.value === '14') {
  counter +=1;
  bulgaria.style.opacity = "1";
  bulgaria.style.zIndex = counter;
  bulgariaWhite.style.backgroundColor = "rgb(255, 255, 255)";
  bulgariaGreen.style.backgroundColor = "rgb(0, 150, 110)";
  bulgariaRed.style.backgroundColor = "rgb(214, 38, 18)";

}

// if austria is selected - opacity

if (selectCountry.value === '15') {
  counter +=1;
  austria.style.opacity = "1";
  austria.style.zIndex = counter;
  austriaRed.style.backgroundColor = "rgb(239, 51, 64)";
  austriaWhite.style.backgroundColor = "rgb(255,255,255)";
  austriaRed2.style.backgroundColor = "rgb(239, 51, 64)";

}

// if armenia is selected - opacity

if (selectCountry.value === '16') {
  counter +=1;
  armenia.style.opacity = "1";
  armenia.style.zIndex = counter;
  armeniaRed.style.backgroundColor = "rgb(217, 0, 18)";
  armeniaBlue.style.backgroundColor = "rgb(0, 51, 160)";
  armeniaYellow.style.backgroundColor = "rgb(242, 168, 0)";

}

// if estonia is selected - opacity

if (selectCountry.value === '17') {
  counter +=1;
  estonia.style.opacity = "1";
  estonia.style.zIndex = counter;
  estoniaBlue.style.backgroundColor = "rgb(0,114,206)";
  estoniaBlack.style.backgroundColor = "rgb(0,0,0)";
  estoniaWhite.style.backgroundColor = "rgb(255, 255, 255)";

}

// if lithuania is selected - opacity

if (selectCountry.value === '18') {
  counter +=1;
  lithuania.style.opacity = "1";
  lithuania.style.zIndex = counter;
  lithuaniaYellow.style.backgroundColor = "rgb(255,184,28)";
  lithuaniaGreen.style.backgroundColor = "rgb(0,106,56)";
  lithuaniaRed.style.backgroundColor = "rgb(190,58,52)";

}

// if ukraine is selected - opacity

if (selectCountry.value === '19') {
  counter +=1;
  ukraine.style.opacity = "1";
  ukraine.style.zIndex = counter;
  ukraineBlue.style.backgroundColor = "rgb(0, 87, 184)";
  ukraineYellow.style.backgroundColor = "rgb(254, 221, 0)";


}

// if poland is selected - opacity

if (selectCountry.value === '20') {
  counter +=1;
  poland.style.opacity = "1";
  poland.style.zIndex = counter;
  polandWhite.style.backgroundColor = "rgb(255,255,255)";
  polandRed.style.backgroundColor = "rgb(210,38,48)";


}

// if japan is selected - opacity

if (selectCountry.value === '21') {
  counter +=1;
  japan.style.opacity = "1";
  japan.style.zIndex = counter;
  japanWhite.style.backgroundColor = "rgb(255,255,255)";
  japanRed.style.backgroundColor = "rgb(239,51,64)";


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

  // if Luxembourg is selected - change color

  if (selectCountry.value === '10') {

    luxembourgRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    luxembourgWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    luxembourgBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Hungary is selected - change color

  if (selectCountry.value === '11') {

    hungaryRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    hungaryWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    hungaryGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Gabon is selected - change color

  if (selectCountry.value === '12') {

    gabonGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    gabonYellow.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    gabonBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Germany is selected - change color

  if (selectCountry.value === '13') {

    germanyBlack.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    germanyRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    germanyYellow.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Bulgaria is selected - change color

  if (selectCountry.value === '14') {

    bulgariaWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    bulgariaGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    bulgariaRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Austria is selected - change color

  if (selectCountry.value === '15') {

    austriaRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    austriaWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    austriaRed2.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Armenia is selected - change color

  if (selectCountry.value === '16') {

    armeniaRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    armeniaBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    armeniaYellow.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Estonia is selected - change color

  if (selectCountry.value === '17') {

    estoniaBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    estoniaBlack.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    estoniaWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Lithuania is selected - change color

  if (selectCountry.value === '18') {

    lithuaniaYellow.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    lithuaniaGreen.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    lithuaniaRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
  }

  // if Ukraine is selected - change color

  if (selectCountry.value === '19') {

    ukraineBlue.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    ukraineYellow.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';

  }

  // if Poland is selected - change color

  if (selectCountry.value === '20') {

    polandWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    polandRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';

  }

  // if Japan is selected - change color

  if (selectCountry.value === '21') {

    japanWhite.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    japanRed.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';

  }









})
