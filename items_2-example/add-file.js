const myBtnClass = document.querySelector(".my");
const file = document.querySelector("#myfile");

//*********************************Slider*************
let sliderPart = document.getElementById("slider-part");
let sliderNewImage = 'images/93.jpg';

// TODO Add new render, after uploaded image.
var slider = {
    slides: ['images/6.jpg', 'images/9.jpg', 'images/20.jpg'],
    //slides.push(sliderNewImage);
    frame:0,
    set: function (image) {
        sliderPart.style.backgroundImage = `url(${image})`;
    },
    init: function () {
        this.slides.push(sliderNewImage);
        this.set(this.slides[this.frame]);
    },
    left: function () {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length -1;
        this.set(this.slides[this.frame]);
    },
    right: function () {
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function () {
    slider.init();
    setInterval(function () {
        slider.right();
    }, 5000);
};
//*************Preview*******
// myBtnClass.addEventListener("change", addImage);


// function addImage(e){
// 	// var URL = window.webkitURL || window.URL;
// 	// var url = URL.createObjectURL(e.target.files[0])
// 	// console.log(url);
//
//
// 	for (var i = 0; i < file.files.length; i++) {
//         console.log(file.files[i].name);
//         console.log(file.files[i].src + 2);
//     }
// }

// function addOnlyImage(){
//     const previewForm = document.querySelector("#img-test");
//     const fileReader = document.querySelector("#input-test-prev").files[0];
//     //let file    = document.querySelector('input[type=file]').files[0];
//     let reader = new FileReader;
//
//
//     for (var i = 0; i < file.files.length; i++) {
//         console.log(file.files[i].name);
//         console.log(file.files[i].src + 2);
//     }
let inputBtn = document.getElementById("input-test-prev");

inputBtn.addEventListener("change", addOnlyImage);

function addOnlyImage(){
    let inputPreview = document.getElementById("img-test");
    let fileReader = inputBtn.files[0];
    var reader  = new FileReader();

    reader.onloadend = function (result) {
        inputPreview.src = result.target.result;
        slider.slides.push(result.target.result);//использовать для слайдера только имейдж и листать его.->удалить бекграунд и заменить на Img
        //console.log(inputPreview.src);//add to slider
    }

    if (fileReader) {
        reader.readAsDataURL(fileReader);
        //sliderNewImage = fileReader;
        //console.log(fileReader);
    } else {
        inputPreview.src = "";
    }
}