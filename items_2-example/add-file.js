const myBtnClass = document.querySelector(".my");
const file = document.querySelector("#myfile");

// $('.my').change(function() {
//     if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
//     else $(this).prev().text('Выберите файлы');
// });
// const targetItem = e.target;
//     const targetChildrenItem = targetItem.parentNode.children;
//     if(targetItem.nodeName == "LI") {
//         ourHeadline.innerHTML = targetItem.innerHTML;
//         for(let i = 0; i < targetChildrenItem.length; i++){
//             targetChildrenItem[i].classList.remove("active");
//             if(targetChildrenItem[i] == targetItem){
//                 targetItem.classList.add("active");
//                 deleteIndex = i;
//                 continue;
//             }
//         }
//         selectItem = targetItem;
//     }
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