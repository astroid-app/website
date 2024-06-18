window.onresize = function() {
    if (window.innerWidth <= 550) {
        document.querySelector(".logo img").src = "../assets/Astroid Logo no bg.png";
    } else {
        document.querySelector(".logo img").src = "../assets/Astroid-banner.png";
    }
}

window.onload = function() {   
    if (window.innerWidth <= 550) {
        document.querySelector(".logo img").src = "../assets/Astroid Logo no bg.png";
    } else {
        document.querySelector(".logo img").src = "../assets/Astroid-banner.png";
    }

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
}