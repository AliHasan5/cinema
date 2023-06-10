let flexContainer2 = document.querySelector('.flex_container2');
let imgPath = ('https://image.tmdb.org/t/p/w500');
let popularMovie = document.querySelector('#popular_movie');
let loggedInUserName = document.querySelector('.loggedInUserName');
let logOut = document.querySelector('.logged_in_user i')

let getUserName = JSON.parse(localStorage.getItem('loggedInUser'))

if (!localStorage.getItem('loggedInUser')) {
    window.location.href = './login/login.html'
}


loggedInUserName.innerHTML = getUserName.name
console.log(getUserName);

logOut.addEventListener('click', () => {
    window.location.href = './entrance/entrance.html';
    localStorage.removeItem('loggedInUser')
})

fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(y => {
            flexContainer2.innerHTML += `
                    <div class="flex_card2">
                        <img src="${imgPath + y.poster_path}" alt="logo">
                        <p>${y.title}</p>
                    </div>
        
        `
        })
    })

let count = 0;
function slider() {
    for (let i = 0; i < popularMovie.children.length; i++) {
        popularMovie.children[i].style.transform = `translateX(${-300 * count}px)`
    }
}


setInterval(() => {
    if (count < popularMovie.children.length - 4) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
}, 3000);

let leftIcon = document.querySelector('.left_icon');
let rightIcon = document.querySelector('.right_icon');


rightIcon.addEventListener('click', () => {
    if (count < popularMovie.children.length - 4) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
})

leftIcon.addEventListener('click', () => {
    if (count > 0) {
        count--;
        slider()
    } else {
        count = 0;
        slider()
    }
})







// let flexContainer3 = document.querySelector('.flex_container3');
let popularMovieee = document.querySelector('#popular_movieee');

fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(y => {
            popularMovieee.innerHTML += `
                    <div class="flex_card2">
                        <img src="${imgPath + y.poster_path}" alt="logo">
                        <p>${y.title}</p>
                    </div>
        
        `
        })
    })

let con = 0;
function sliders() {
    for (let i = 0; i < popularMovieee.children.length; i++) {
        popularMovieee.children[i].style.transform = `translateX(${-300 * con}px)`
    }
}


setInterval(() => {
    if (con < popularMovieee.children.length - 4) {
        con++
        sliders()
    } else {
        con = 0
        sliders()
    }
}, 3000);

let leftIconn = document.querySelector('.left_iconn');
let rightIconn = document.querySelector('.right_iconn');


rightIconn.addEventListener('click', () => {
    if (con < popularMovieee.children.length - 4) {
        con++
        sliders()
    } else {
        con = 0
        sliders()
    }
})

leftIconn.addEventListener('click', () => {
    if (con > 0) {
        con--;
        sliders()
    } else {
        con = 0;
        sliders()
    }
})






// let flexContainer4 = document.querySelector('.flex_container4');
let popularMovieeer = document.querySelector('#popular_movieeer');

fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(y => {
            popularMovieeer.innerHTML += `
                    <div class="flex_card2">
                        <img src="${imgPath + y.poster_path}" alt="logo">
                        <p>${y.title}</p>
                    </div>
        
        `
        })
    })

let cone = 0;
function sliderss() {
    for (let i = 0; i < popularMovieeer.children.length; i++) {
        popularMovieeer.children[i].style.transform = `translateX(${-300 * cone}px)`
    }
}


setInterval(() => {
    if (cone < popularMovieeer.children.length - 4) {
        cone++
        sliderss()
    } else {
        cone = 0
        sliderss()
    }
}, 3000);

let leftIconne = document.querySelector('.left_iconne');
let rightIconne = document.querySelector('.right_iconne');


rightIconne.addEventListener('click', () => {
    if (cone < popularMovieeer.children.length - 4) {
        cone++
        sliderss()
    } else {
        cone = 0
        sliderss()
    }
})

leftIconne.addEventListener('click', () => {
    if (cone > 0) {
        cone--;
        sliderss()
    } else {
        cone = 0;
        sliderss()
    }
})






let = gridContainer = document.querySelector(".grid_container");
let = gridCard = document.querySelector(".grid_card");

fetch("./api/videos.json")
    .then(respon => respon.json())
    .then(dataa => {
        console.log(dataa);
        dataa.forEach(m => {
            gridContainer.innerHTML += `
        <div class="grid_card">
            <video controls src="${m.video}"></video>
            <p>${m.title}</p>
        </div>
        `
        })
    })


let navList = document.querySelector('.ul_list')
let barsIcon = document.querySelector('.bars_icon')


barsIcon.addEventListener('click', () => {
    navList.classList.toggle('active')
})




