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



function validateNonEmpty(inputFieldName, helpText) {
    //проверка на наличие текста
    if(inputFieldName.value.length == 0) {
        //сообщаем пользователю что данные не введены
        if(helpText != null)
            helpText.innerHTML = "Please enter a value.";
        return false;
    }
    else {
        //данные обнаружены, убираем вспомагательный текст
        if(helpText != null)
            helpText.innerHTML = "";
        return true;
    }
}
function validateLength(minLength, maxLength, inputField, helpText){
    //смотрим что текст содержит как минимум минЛенг, но не больше МаксЛенг
    if(inputField.value.length < minLength || inputField.value.length > maxLength){
        //сообщаем пользователю о вводе некоректных данных
        if(helpText != null)
            helpText.innerHTML = "Please enter a value " + minLength + " to " +maxLength + " characters in length.";
        console.log(this);
        return false;
    }
    else {
        //C данными все нормб убираем подсказку
        if (helpText != null)
            helpText.innerHTML = "";
        return true;
    }
}
function validZipCode(inputField, helpText){
    //смотрим что текст содержит как минимум минЛенг, но не больше МаксЛенг
    if(inputField.value.length != 5){
        //сообщаем пользователю о вводе некоректных данных
        if(helpText != null)
            helpText.innerHTML = "Please enter only 5 numbers.";
        console.log(this);
        return false;
    }
    else if (isNaN(inputField.value)){
        //Cообщение что ожидаем только цифры
        if (helpText != null)
            helpText.innerHTML = "Please enter only numbers type of values";
        return false;
    } else {
        //C данными все норм, убираем подсказку
        if (helpText != null)
            helpText.innerHTML = "";
        return true;
    }
}

function validateRegEx(regex, inputStr, helpText, HelpMessage) {
    //проверим корректность данных InputStr
    if(!regex.test(inputStr)){
        //Данные корректны, зададим текст для подскази и вернем false
        if(helpText != null)
            helpText.innerHTML = HelpMessage;
        return false;
    } else {
        //данные корректны, удалим текст подсказки и вернем true
        if(helpText != null)
            helpText.innerHTML = "";
        return true;
    }

}
function validateDate(inputField, helpText) {
    //проверяем введены ли данные в поле
    if(!validateNonEmpty(inputField, helpText))
        return false;
    return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/, inputField.value, helpText, "Пожалуйста введите дату в формате 01/14/2012.");

}

function validatePhone(inputField, helpText) {
    //Проверяем были ли введены данные
    if(!validateNonEmpty(inputField, helpText))
        return false;
    //Проверяем что данные-номер телефона
    return validateRegEx(/^\d{3}-\d{3}-(\d{4})$/, inputField.value, helpText, "Пожалуйста введите телефон в формате 011-144-9015.");
}

function validateEmail(inputField, helpText) {
    //Проверяем были ли введены данные
    if(!validateNonEmpty(inputField, helpText))
        return false;
    //Проверяем что данные-номер телефона
    return validateRegEx(/^[\w\.-_\+@[\w-]+(\.\w{2,4})+$/, inputField.value, helpText, "Пожалуйста введите email в валидной форме myname@yandex.ru.");
}

function placeOrder(form) {
    if(validateLength(2,32, form["message"], form["message_help"]) &&
        validZipCode(form["zipcode"], form["zipcode_help"]) &&
        validateNonEmpty(form["date"], form["date_help"]) &&
        validateNonEmpty(form["name"], form["name_help"]) &&
        validateNonEmpty(form["phone"], form["phone_help"]) &&
        validateNonEmpty(form["email"], form["email_help"])){
        alert("Ваша форма отправленна на рассмотрение. Спасибо)");
        //отправка заказа на сервер
        form.submit();
    } else {
        alert("Простите но форма заполнена неверно");
    }
}