const myBtnClass = document.querySelector(".my");
const file = document.querySelector("#myfile");

//for preview
function addImage(e){
	// var URL = window.webkitURL || window.URL;
	// var url = URL.createObjectURL(e.target.files[0])
	// console.log(url);


	for (var i = 0; i < file.files.length; i++) {
        console.log(file.files[i].name);
        console.log(file.files[i].src + 2);
    }
}
let inputBtn = document.getElementById("input-test-prev");

inputBtn.addEventListener("change", addOnlyImage);

function addOnlyImage(){  
	let inputPreview = document.getElementById("img-test");  
    const fileReader = inputBtn.files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
    inputPreview.src = reader.result;
  	}

  	if (fileReader) {
	    reader.readAsDataURL(fileReader);	   
	  } else {
	    inputPreview.src = "";
	}   
}
//*********************************Slider*************
const sliderPart = document.getElementById("slider-part");

var slider = {
    slides: ['6.jpg', '9.jpg', '20.jpg'],
    frame:0,
    set: function (image) {
        sliderPart.style.backgroundImage = "url(images/" + image + ")";
    },
    init: function () {
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
// http://qaru.site/questions/11050/preview-an-image-before-it-is-uploaded

