window.onresize = function() {
    if (window.innerWidth <= 550) {
        document.querySelector(".logo img").src = "../assets/Astroid Logo no bg.png";
    } else {
        document.querySelector(".logo img").src = "../assets/Astroid-banner.png";
    }
}


async function getStats() {
    const res = await fetch("https://api.astroid.cc/statistics");
    const data = await res.json();
    
    // animation from https://jshakespeare.com/simple-count-up-number-animation-javascript-react/
    const animationDuration = 1000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round( animationDuration / frameDuration );
    const easeOutQuad = t => t * ( 2 - t );

    const animateCountUp = el => {
        let frame = 0;
        const countTo = parseInt( el.innerHTML, 10 );
        const counter = setInterval( () => {
            frame++;
            const progress = easeOutQuad( frame / totalFrames );
            const currentCount = Math.round( countTo * progress );
            if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
                el.innerHTML = currentCount;
            }
            if ( frame === totalFrames ) {
                clearInterval( counter );
                if (el.id == "total-messages-num") {
                    el.innerText = data.messages.total_rounded + "+";
                }

            }
        }, frameDuration );
    };
    document.querySelector("#total-servers-num").innerText = data.endpoints;
    document.querySelector("#total-messages-num").innerText = data.messages.total_rounded;
    document.querySelector("#messages-month-num").innerText = data.messages.month;

    animateCountUp(document.querySelector('#total-servers-num'));
    animateCountUp(document.querySelector('#total-messages-num'));
    animateCountUp(document.querySelector('#messages-month-num'));

    document.querySelector("#total-servers-num").innerText = document.querySelector("#total-messages-num").innerText + "+";



}

window.onload = async function() {   
    if (window.innerWidth <= 550) {
        document.querySelector(".logo img").src = "../assets/Astroid Logo no bg.png";
    } else {
        document.querySelector(".logo img").src = "../assets/Astroid-banner.png";
    }

    document.querySelector(".logo img").onclick = function() { 
        window.location.href = "/";
    }
    
    await getStats();

document.querySelectorAll("#can-resize").forEach(img => {
    img.onclick = function() {
        const div = document.querySelector(".full_img_div");
        var div_img = document.createElement("img");
        div_img.src = img.src;
        div_img.id = "full_img";
        div.appendChild(div_img);
        div.style.display = "flex";
        document.querySelector(".norm").style.filter = "blur(5px) brightness(0.3)";
        document.querySelector("body").id = "no-scroll";
    }
});

    document.querySelector(".close").onclick = function() {
        document.querySelector(".full_img_div").style.display = "none";
        document.querySelector(".full_img_div #full_img").remove();
        document.querySelector(".norm").style.filter = "none";
        document.querySelector("body").id = null;
    }
    document.querySelector("body").onclick = function(e) {
        if (e.target.className == "full_img_div") {
            document.querySelector(".full_img_div").style.display = "none";
            document.querySelector(".full_img_div #full_img").remove();
            document.querySelector(".norm").style.filter = "none";
            document.querySelector("body").id = null;
        }
    }
    document.querySelector("#github").onclick = function() {
        window.open("https://github.com/astroid-app");
    }
    document.querySelector("#get-astroid").onclick = function() {
        window.open("./invite");
    }
    document.querySelector("#discord").onclick = function() {
        window.open("https://api.astroid.cc/discord");
    }
    document.querySelector("#supportus").onclick = function() {
        window.open("https://ko-fi.com/astroidapp");
    }
}