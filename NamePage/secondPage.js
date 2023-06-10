// let flexContainer5 = document.querySelector('.flex_container5');
// let popularMovieeed = document.querySelector('#popular_movieeed');
// let imgPath = ('https://image.tmdb.org/t/p/w500');

// fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
//     .then(respo => respo.json())
//     .then(data => {
//         console.log(data.results);
//         data.results.forEach(a => {
//             flexContainer5.innerHTML += `
//                     <div class="flex_card2>
//                         <img src="${imgPath + a.poster_path}" alt="logo">
//                         <p>${a.title}</p>
//                     </div>
        
//         `
//         })
//     })

// let cone = 0;
// function sliders() {
//     for (let i = 0; i < popularMovieeed.children.length; i++) {
//         popularMovieeed.children[i].style.transform = `translateX(${-300 * cone}px)`
//     }
// }


// setInterval(() => {
//     if (cone < popularMovieeed.children.length - 4) {
//         cone++
//         sliders()
//     } else {
//         cone = 0
//         sliders()
//     }
// }, 3000);

// let leftIconnen = document.querySelector('.left_iconnen');
// let rightIconnen = document.querySelector('.right_iconnen');


// rightIconnen.addEventListener('click', () => {
//     if (cone < popularMovieeed.children.length - 4) {
//         cone++
//         sliders()
//     } else {
//         cone = 0
//         sliders()
//     }
// })

// leftIconnen.addEventListener('click', () => {
//     if (cone > 0) {
//         cone--;
//         sliders()
//     } else {
//         cone = 0;
//         sliders()
//     }
// })



let flexContainer5 = document.querySelector('.flex_container5');
let popularMovieContainer = document.querySelector('#popular_movie_container');
let imgPath = ('https://image.tmdb.org/t/p/w500');


fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(t => {
            popularMovieContainer.innerHTML += `
                    <div class="flex_card2">
                        <img src="${imgPath + t.poster_path}" alt="logo">
                        <p>${t.title}</p>
                    </div>
        
        `
        })
    })

let cone = 0;
function sliderss() {
    for (let i = 0; i < popularMovieContainer.children.length; i++) {
        popularMovieContainer.children[i].style.transform = `translateX(${-300 * cone}px)`
    }
}


setInterval(() => {
    if (cone < popularMovieContainer.children.length - 4) {
        cone++
        sliderss()
    } else {
        cone = 0
        sliderss()
    }
}, 3000);

let leftIconChild = document.querySelector('.left_icon_child');
let rightIconChild = document.querySelector('.right_icon_child');


rightIconChild.addEventListener('click', () => {
    if (cone < popularMovieContainer.children.length - 4) {
        cone++
        sliderss()
    } else {
        cone = 0
        sliderss()
    }
})

leftIconChild.addEventListener('click', () => {
    if (cone > 0) {
        cone--;
        sliderss()
    } else {
        cone = 0;
        sliderss()
    }
})





let videoContainer = document.querySelector('.video_container');
// let videoChild = document.querySelector('.video_child');


fetch("../api/videos2.json")
    .then(respon => respon.json())
    .then(data => {
        console.log(data);
        data.forEach(t => {
            videoContainer.innerHTML += `
    <div class="video_child">
        <video controls src="${t.video}"></video>
       
    </div>
    `
        })
    })