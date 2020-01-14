### Webcam video on canvas

First you have to get this project running on a local server because of the security restrictions on getting acces to the webcam.

If you already have nodejs installed on your computer, navigate to this folder and run npm install and then npm start.

To access the webcam we use the MediaDevices.getUserMedia() method. This returns a promise depending on whether the user allows or denies the access to webcam.

To paint the video onto the canvas, we set the canvas to draw an image from our video every 16 milliseconds.

Finally, we add an event listener to call paintToCanvas method.

For our taking a photo function, we need to access the data from the canvas and output it as a jpeg. We also create a link which enables you to download the images. And finally, we insert the pictures into our strip html element.

The image data on the canvas can be broken down into the rgba values of each pixel in a huge array. That is how we can make functions to alter the colors of the video.

We first access the pixels array from the canvas with getImageData. Then we loop over the array with the good old fashioned for loop.

This is how the red effect, rgb effect and green screen effect was achieved. 

