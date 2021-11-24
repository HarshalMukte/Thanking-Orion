let message = document.querySelectorAll(".afterClick span");
let cards = document.querySelectorAll(".card");
let wrapper = document.querySelector(".wrapper");
var video = document.getElementById('video');
var source = document.getElementById('source');

let celebration = () => {
    document.querySelector(".ballons").style.display = "block";
    document.querySelector(".stars").style.display = "block";
    setTimeout(() => {
        document.querySelector(".ballons").classList.add("active");
    document.querySelector(".stars").classList.add("active");
    }, 200);
}
let activeCard = (element) => {
    element.classList.add("active");
    element.children[0].classList.add("deActive");
    element.children[1].classList.add("active");
}
let deActiveCard = (element) => {
    element.classList.remove("active");
    element.children[0].classList.remove("deActive");
    element.children[1].classList.remove("active");
}
let bingo = (element) => {
    element.classList.add("bingo");
    element.children[0].classList.add("bingo");
    element.children[1].classList.add("bingo");
    setTimeout(() => {
        wrapper.style.display = "none";
        document.querySelector(".thankyouMsg").classList.add("active");
    }, 6000);
    document.querySelectorAll(".hoverMe").forEach(e => e.style.display = "none")
}

cards.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        element.addEventListener("click", () => {
            if (index === 1) {
                celebration();
                bingo(element);

                setTimeout(() => {
                    document.getElementById("logo").style.display = "block";
                    source.setAttribute('src', "./media/Lines - 4760.mp4");
                    video.load();
                    video.play();
                }, 6000);
            
                setTimeout(() => {
                    wrapper.classList.remove("active");
                }, 5000);
            }
            activeCard(element);
        })
    })
});
cards.forEach((element) => {
    element.addEventListener("mouseleave", () => {
      
        deActiveCard(element);     
        
    })
});
window.addEventListener("load", () => {
   
    wrapper.style.display = "none";

    setTimeout(() => {
        document.getElementById("logo").style.display = "none";
        source.setAttribute('src', "./media/Squares.mp4");
        video.load();
        video.play();
    wrapper.style.display = "flex";
    }, 8000);

    setTimeout(() => {
        wrapper.classList.add("active");
    }, 10000);
})

