var introWatches = document.getElementsByClassName('intro-animation-watches-container')[0];
var gallaryContainerItem = document.getElementsByClassName('gallary-container')[0];
var gallaryPrice = document.getElementsByClassName('gallary-price')[0];

setTimeout(() => {
    introWatches.remove();
    gallaryContainerItem.classList.add('show-gallary');
    gallaryPrice.classList.add('gallary-price-show')
}, 3000);

//---------------Change Watches Color-------------

var imagesColorVersas = [
    'img/P_Versa_Pink.png',
    'img/P_Versa_Grey.png',
    'img/P_Versa_Black.png',
]

var imagesColorCharge = [
    'img/P_Charge3_Lilac.png',
    'img/P_Charge3_Black.png',
    'img/P_Charge3_Blue.png',
]

var imagesColorHR = [
    'img/P_HR_White.png',
    'img/P_HR_Lilac.png',
    'img/P_HR_Black.png',
]

var buttonsVersa = document.getElementsByClassName('button-versa');
var watchesImageVersa = document.getElementsByClassName('gallary-watches-img')[0];

for (let i = 0; i < buttonsVersa.length; i++){
    changeColorWatch(buttonsVersa[i], imagesColorVersas[i], watchesImageVersa);
}

var buttonsCharge = document.getElementsByClassName('button-charge');
var watchesImageCharge = document.getElementsByClassName('gallary-watches-img')[1];

for (let i = 0; i < buttonsCharge.length; i++){
    changeColorWatch(buttonsCharge[i], imagesColorCharge[i], watchesImageCharge);
}

var buttonsHr = document.getElementsByClassName('button-hr');
var watchesImageHr = document.getElementsByClassName('gallary-watches-img')[2];

for (let i = 0; i < buttonsHr.length; i++){
    changeColorWatch(buttonsHr[i], imagesColorHR[i], watchesImageHr);
}

function changeColorWatch(button, photo, targetImage){
    button.addEventListener('click', function(){
    targetImage.src = photo;
    })
};
//------------------------- Forbit landscape mode---------------

var body = document.getElementsByClassName('page-container')[0];

window.addEventListener("orientationchange", function() {
    if (window.orientation == 90){
        body.classList.add('landscape');
    } else{
        body.classList.remove('landscape');
    }
}, false);










