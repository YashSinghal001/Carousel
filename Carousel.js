let slide=document.querySelectorAll(".slide");
console.log(slide);
let counter=0;
slide.forEach((slide,index) =>{
slide.style.bottom=`${index *100}%`
})

let goPrev = () =>{
    counter--
    slideImgae();
}

let goNext = () =>{
    counter++
    slideImgae();
}


let slideImgae = () =>{
    slide.forEach((slide) =>{
        slide.style.transform=`translateY(${counter*100}%)`
    })
}