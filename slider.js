// find elements
var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');

// subscribe elements
showPrevBtn.addEventListener ('click', onShowPrevBtnClick);
showNextBtn.addEventListener ('click', onShowNextBtnClick);

//create images array
var imagesUrls = [];
imagesUrls.push ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuvFCVo5Rz98xpoXF-_ESLWEFCYLGiTcf73arLJk32mcBK-WgyqVEI36vgIsJ5qELJEM&usqp=CAU');
imagesUrls.push ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGLDdo8xTCISTW1C5F6q9sjx9yj4gm-CMBbwu2U-nu0uWM6HkRMydmfUjodG0XAhBxXg&usqp=CAU');
imagesUrls.push ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzGp2K0fD9oAXjcS6iC6yp_c9w6oLYjbAVIfKQMq4J-DNAPipuqfnjEaYlr_Wcv4YHGU&usqp=CAU');
imagesUrls.push ('https://i.pinimg.com/564x/e9/ff/ab/e9ffab0b910ac5f3e4898dc1c31038ed.jpg');


var currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;


//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    // disabled next button if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }

}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    // disabled next button if need
    if (currentImageIndex === imagesUrls.length - 1) {
        showNextBtn.disabled = true;
    }
}