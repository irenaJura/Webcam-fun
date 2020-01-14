const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// get the video being piped in to video element
function getVideo() { // returns a Promise
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then(localMediaStream => {
        // console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => {
        console.log('Shit', err);
    });
}


// take a frame from the video and paint it on the canvas
function paintToCanvas() {
    // width & height of the actual video
    const width = video.videoWidth;
    const height = video.videoHeight;
    // need to make sure canvas is the exact same size
    canvas.width = width;
    canvas.height = height;

    // every 16 millisecond we're going to an image
    // from the webcam and put it into canvas
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}

// run the function on page load
getVideo();

video.addEventListener('canplay', paintToCanvas); 
