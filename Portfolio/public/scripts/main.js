const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.main-video');

const movieList = [
    '/videos/hero-video.mp4',
    '/videos/movie1.mp4',
    '/videos/movie2.mp4',
    '/videos/movie3.mp4'
];


let index = 0;

nextButton.addEventListener('click', function() {
    index += 1;

    if (index >= movieList.length) {
        index = 0;
    }

    video.src = movieList[index];
});