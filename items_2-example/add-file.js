const myBtnClass = document.querySelector(".my");
const file = document.querySelector("#myfile");

// var slider = {
//     slides: ['6.jpg', '9.jpg', '20.jpg'],
//     frame:0,
//     set: function (image) {
//         document.getElementById("scr").style.backgroundImage = "url(images/" + image + ")";
//     },
//     init: function () {
//         this.set(this.slides[this.frame]);
//     },
//     left: function () {
//         this.frame--;
//         if(this.frame < 0) this.frame = this.slides.length -1;
//         this.set(this.slides[this.frame]);
//     },
//     right: function () {
//         this.frame++;
//         if(this.frame == this.slides.length) this.frame = 0;
//         this.set(this.slides[this.frame]);
//     }
// };
// window.onload = function () {
//     slider.init();
//     setInterval(function () {
//         slider.right();
//     }, 5000);
// };
// http://qaru.site/questions/11050/preview-an-image-before-it-is-uploaded
// 

myBtnClass.addEventListener("change", addImage);


function addImage(e){
	// var URL = window.webkitURL || window.URL;
	// var url = URL.createObjectURL(e.target.files[0])
	// console.log(url);


	for (var i = 0; i < file.files.length; i++) {
        console.log(file.files[i].name);
        console.log(file.files[i].src + 2);
    }
}

function addOnlyImage(){
    const previewForm = document.querySelector("#img-test");
    const fileReader = document.querySelector("#input-test-prev").files[0];
    //let file    = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader;


    for (var i = 0; i < file.files.length; i++) {
        console.log(file.files[i].name);
        console.log(file.files[i].src + 2);
    }
}