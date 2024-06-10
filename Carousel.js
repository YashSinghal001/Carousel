let slide=document.querySelectorAll(".slide");
console.log(slide);
let counter=0;
slide.forEach((slide,index) =>{
slide.style.left=`${index *100}%`
})

const goNext = () => {
    if (counter < slide.length - 1) {
    counter++;
    slideImgae();
    }
    };
    const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImgae();
    }
    };
    


let slideImgae = () =>{
    slide.forEach((slide) =>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}