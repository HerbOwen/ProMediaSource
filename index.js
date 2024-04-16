let ssbg = document.getElementById("slideshow_pic");
let sstxt = document.getElementById("slide_textarea");
let sstxtHead = document.getElementById("slide_textHead");
let sstxtCont = document.getElementById("slide_textContent");
let dotContainer = document.getElementById("dotContainer");

var images = ["assets/consulting_1.png", "assets/consulting_2.png", "assets/consulting_3.png"];
var textHead = ["Operations Management", "Financial", "Business Operations"];
var textContent = [
    ["- Business Process Improvement", "- Online Digital Payments", "- Re-Insurance", "- Model Analysis", "- Insurance Exposure"],
    ["- Improve Production Efficiency", "- Manage Quality Controls", "- Compliance Sector", "- Legal Sector ", "- Risk Sector"],
    ["- Business Process Improvement", "- Online Digital Payments", "- Re-Insurance", "- Model Analysis and Development", "- Insurance Exposure and Data Loss Reporting"]
];

var currentIndex = 0;

function updateBackground() {
    ssbg.style.transition = "opacity 0.33s ease-in-out"; 
    ssbg.style.opacity = 0; 
    sstxtHead.innerHTML = `${textHead[currentIndex]}`;
    sstxtCont.innerHTML = "";

    
    textContent[currentIndex].forEach(content => {
        const paragraph = document.createElement("div");
        paragraph.className = "lookInJs"; 
        paragraph.className = "agile_p pt-2";
        paragraph.textContent = content;
        sstxtCont.appendChild(paragraph);
    });

  
    const dots = Array.from(dotContainer.children);
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    setTimeout(() => {
        ssbg.style.background = `url(${images[currentIndex]})`;
        ssbg.style.backgroundPosition = "center";
        ssbg.style.backgroundSize = "cover";
        ssbg.style.backgroundRepeat = "no-repeat";
        ssbg.style.borderRadius = "5px";
        ssbg.style.boxShadow = "2px 2px 15px 2px #343434";
        ssbg.style.opacity = 1; 
    }, 140); 
}


function generateDots() {
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement("p");
        dot.className = "dot";
        dot.addEventListener("click", () => {
            currentIndex = i;
            stopSlideshow(); 
            updateBackground();
        });
        dotContainer.appendChild(dot);
    }
}

document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex++;
    stopSlideshow(); 
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateBackground();
});

document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex--;
    stopSlideshow(); 
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateBackground();
});

var slideshowInterval; 


function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateBackground();
    }, 4300); 
}


function stopSlideshow() {
    clearInterval(slideshowInterval);
}


startSlideshow();

generateDots();
updateBackground();