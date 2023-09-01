//the blob is VERY HEAVILY inspired from Hyperplexed's codepen and YT video https://codepen.io/Hyperplexed/pen/KKBjvbG

const blob = document.getElementById("blob");

// Check if the device has touch support, if yes hide the blob on those devices to dodge spacing and scrolling problems
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    blob.style.display = 'none';
} else {  //make the blob follow the cursor with a bit of a delay
    window.onpointermove = event => { 
        const { clientX, clientY } = event;
    
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {
            duration: 3000,
            fill: "forwards"
        });
    }
}