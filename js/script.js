window.onload = function() {

    var btnPrev = document.querySelector(".gallery-1 .buttons .prev1");
    var btnNext = document.querySelector(".gallery-1 .buttons .next1");
    var images1 = document.querySelectorAll(".gallery-1 .photos img")

    class Slider {
        constructor(images, btnPrev, btnNext) {

            this.i = 0;
            this.images = images;
            this.btnNext = btnNext;
            this.btnPrev = btnPrev;
            this.prev = function() {
                this.btnNext.classList.remove('endnext');
                this.images[this.i].classList.remove("showed")
                this.i--;
                this.i < 1 ? this.btnPrev.classList.add('endprev') : this.btnPrev.classList.remove('endprev');
                this.i < 0 ? this.i = 0 : 0;
                this.images[this.i].classList.add("showed")
            }
            this.next = function() {
                this.btnPrev.classList.remove('endprev');
                this.images[this.i].classList.remove("showed");
                this.i < (this.images.length - 1) ? ++this.i : 0;
                this.i >= (this.images.length - 1) ? this.btnNext.classList.add('endnext') : this.btnNext.classList.remove('endnext');
                this.i >= this.images.length ? this.i = this.images.length : 0;
                this.images[this.i].classList.add("showed");
            }
        }
    }
    var slider = new Slider(images1, btnPrev, btnNext);


    btnPrev.onclick = function() {
        slider.prev();
    };
    btnNext.onclick = function() {
        slider.next();
    };






}