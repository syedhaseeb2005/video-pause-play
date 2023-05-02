const btn = document.querySelector('.btn')
const video = document.querySelector('.video')


btn.addEventListener("click",()=>{
    if(!btn.classList.contains("slide")){
        btn.classList.toggle("slide");
        video.pause();
    }else{
        btn.classList.toggle("slide");
        video.play();
    }
})
    