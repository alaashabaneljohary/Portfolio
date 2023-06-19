var swiper = document.getElementById("swiper") ;
document.body.addEventListener("mousemove" , function(e) {

    swiper.style.left = `${e.clientX}px` ;
    swiper.style.top = `${e.clientY}px` ;

}) ;

var imgList =Array.from(document.querySelectorAll(".items img")) ;
var lightBoxContainer  = document.getElementById("lightBoxContainer") ;
var lightBox = document.getElementById("lightBox") ;
var prevBtn = document.getElementById("prev") ;
var closeBtn = document.getElementById("close") ;
var next = document.getElementById("next") ;
console.log(imgList)
var currentIndex ;
for(var i = 0 ; i < imgList.length ; i++)
{
    imgList[i].addEventListener("click" , function(e) {
       lightBoxContainer.style.display = 'flex' ;
        var imgSrc = e.target.src ;
        lightBox.style.backgroundImage = `url(${imgSrc})` ;
        currentIndex = imgList.indexOf(e.target) ;
        console.log(currentIndex)
    })
}
closeBtn.addEventListener("click" , function() {
    lightBoxContainer.style.display = 'none' ;
})
document.body.addEventListener("keyup" , function(e) {
    console.log(e) ;
    if(e.key == "Escape") {
        lightBoxContainer.style.display = 'none' ;
    }
})

function prevSlider() {
    currentIndex = currentIndex-1 ;
    if(currentIndex < 0) {
        currentIndex = imgList.length -1 ;
    }
    var imgSrc = imgList[currentIndex].src ;
    lightBox.style.backgroundImage = `url(${imgSrc})` ;
    
}
prevBtn.addEventListener("click" , prevSlider);

function nextSlider() {
    currentIndex = currentIndex+1 ;
    if(currentIndex == imgList.length) {
        currentIndex = 0 ;
    }
    var imgSrc = imgList[currentIndex].src ;
    lightBox.style.backgroundImage = `url(${imgSrc})` ;
    
}
next.addEventListener("click" , nextSlider);