//the blob is VERY HEAVILY inspired from Hyperplexed's codepen and YT video https://codepen.io/Hyperplexed/pen/KKBjvbG

const blob = document.getElementById("blob");
const enlarged = document.querySelector(".enlarged");
const dimmer = document.querySelector(".dimmer");

//I've used variables for animating to reverse the dimming and spare some lines of code
const dimWebsite = [
    {
        opacity: 0
    },
    {
        opacity: 0.75
    }
];

const animateParams = {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-in-out'
};

const reversedAnimateParams = {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-in-out',
    direction: 'reverse'
}

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

    //animation of sliding in the enlarged nft
    enlarged.style.display = "flex";
    enlarged.animate([
        {
            transform: 'translateY(-150px)',
            opacity: 0
        },
        {
            transform: 'translateY(0)',
            opacity: 1
        }
    ], animateParams)

    //animation of dimming the website down
    dimmer.style.display = "block";
    dimmer.animate(dimWebsite, animateParams)

})

document.querySelector("#exit").addEventListener("click", () => {
    //animation of sliding the enlarged nft out
    enlarged.animate([
        {
            transform: 'translateY(0)',
            opacity: 1
        },
        {
            transform: 'translateY(150px)',
            opacity: 0
        }
    ], animateParams)

    //animation of undimming the website with an addition property of direction: reverse as to save some lines of code for writing a new animation for it
    dimmer.animate(dimWebsite, reversedAnimateParams);

    //setting the display property of pop-up elements to none as to be able to click the permament content on the page
    setTimeout(() => {
        enlarged.style.display = "none";
        dimmer.style.display = "none";
    }, 500)
})