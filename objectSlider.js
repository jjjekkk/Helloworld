var slider = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev'),
    showNextBtn: document.getElementById('show-next'),
    slideImage: document.getElementById('slide-img'),

    start: function () {
        var that = this;
        // subscribe elements
        this.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick()
        });
        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick()
        });

        //create images array
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuvFCVo5Rz98xpoXF-_ESLWEFCYLGiTcf73arLJk32mcBK-WgyqVEI36vgIsJ5qELJEM&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGLDdo8xTCISTW1C5F6q9sjx9yj4gm-CMBbwu2U-nu0uWM6HkRMydmfUjodG0XAhBxXg&usqp=CAU');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzGp2K0fD9oAXjcS6iC6yp_c9w6oLYjbAVIfKQMq4J-DNAPipuqfnjEaYlr_Wcv4YHGU&usqp=CAU');
        this.imagesUrls.push('https://i.pinimg.com/564x/e9/ff/ab/e9ffab0b910ac5f3e4898dc1c31038ed.jpg');
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        // disabled next button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },
    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        // disabled next button if need
        if (this.currentImageIndex === this.imagesUrls.length - 1) {
            this.showNextBtn.disabled = true;
        }
    }
}

slider.start();
