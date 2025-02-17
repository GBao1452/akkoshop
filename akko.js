const slideShow = document.querySelector('.slide-show .list-images');
const slides = document.querySelectorAll('.list-images img');
const btnLf = document.querySelector('.slide-show .btn-left');
const btnRt = document.querySelector('.slide-show .btn-right');
const indexItems = document.querySelectorAll('.index-item');
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    let searchIcon = document.querySelector(".search button");
    let searchContainer = document.querySelector(".search");
    let searchInput = document.querySelector(".search-dropdown input");


    searchIcon.addEventListener("click", function (event) {
        event.stopPropagation(); 
        searchContainer.classList.toggle("active");
        searchInput.focus(); 
    });

    document.addEventListener("click", function (event) {
        if (!searchContainer.contains(event.target)) {
            searchContainer.classList.remove("active");
        }
    });
});


function updateActiveIndex() {
    indexItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}


function moveSlideRight() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
    slideShow.style.transition = 'transform 0.5s ease';
    updateActiveIndex();
}

function moveSlideLeft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
    slideShow.style.transition = 'transform 0.5s ease';
    updateActiveIndex();
}


btnRt.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    moveSlideRight();
    handleEventChangeSlide = setInterval(moveSlideRight, 4000);
});

btnLf.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide);
    moveSlideLeft();
    handleEventChangeSlide = setInterval(moveSlideRight, 4000);
});


indexItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        clearInterval(handleEventChangeSlide);
        currentIndex = index;
        slideShow.style.transform = `translateX(-${currentIndex * 100}%)`;
        slideShow.style.transition = 'transform 0.5s ease';
        updateActiveIndex();
        handleEventChangeSlide = setInterval(moveSlideRight, 4000);
    });
});


let handleEventChangeSlide = setInterval(moveSlideRight, 4000);

const carousel = document.getElementById('carousel');

document.querySelector('.prev-btn').addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.next-btn').addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});
// ----------------------------------
var swiper = new swiper(".keyboard-slider", {
    slidesPerView: 5, 
    spaceBetween: 20, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, 
});


document.querySelectorAll(".product-img").forEach(img => {
    let originalSrc = img.src;
    let hoverSrc = img.getAttribute("data-hover");

    img.addEventListener("mouseover", () => {
        img.src = hoverSrc;
    });

    img.addEventListener("mouseout", () => {
        img.src = originalSrc;
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });
    $("backtop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    }); 
});

// document.addEventListener("DOMContentLoaded", function () {
//     let scrollToTopButton = document.querySelector(".scroll-to-top");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 200) {
//             scrollToTopButton.style.display = "flex";
//         } else {
//             scrollToTopButton.style.display = "none";
//         }
//     });

//     scrollToTopButton.addEventListener("click", function () {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".social-icons a");
    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.color = "#f39c12"; // Màu khi hover
        });
        icon.addEventListener("mouseout", () => {
            icon.style.color = "white"; // Quay lại màu trắng
        });
    });
});
