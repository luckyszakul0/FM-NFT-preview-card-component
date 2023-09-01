//the blob is VERY HEAVILY inspired from Hyperplexed's codepen and YT video https://codepen.io/Hyperplexed/pen/KKBjvbG

const blob = document.getElementById("blob");
const enlarged = document.querySelector(".enlarged");
const dimmer = document.querySelector(".dimmer");

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

document.querySelector(".nft").addEventListener("click", () => {
    enlarged.style.display = "flex";
    enlarged.style.animation = "slideIn 0.5s forwards";
    dimmer.style.display = "block";
    dimmer.style.animation = "dimWebsite 0.5s forwards"
})

document.querySelector("#exit").addEventListener("click", () => {
    enlarged.style.animation = "slideOut 0.5s forwards";
    dimmer.style.animation = "undimWebiste 0.5s forwards";
    setTimeout(() => {
        enlarged.style.display = "none";
        dimmer.style.display = "none";
    }, 500);
})