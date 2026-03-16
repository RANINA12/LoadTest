const frame = document.getElementById("imageFrame");
const spinner = document.getElementById("spinner");
const btn = document.getElementById("colorBtn");
const title = document.getElementById("main-title");

btn.addEventListener("click", () => {

    const colors = ["red", "green", "blue", "purple", "orange", "black"];

    const random = colors[Math.floor(Math.random() * colors.length)];

    title.style.background = random;

});

function loadImage() {
    spinner.style.display = "block";
    const cloudinaryImage = "https://res.cloudinary.com/dzsduinsj/image/upload/v1759577137/MedicalSlip/NikunjSign.jpg.jpg";
    frame.src = cloudinaryImage;
}

frame.onload = () => {
    spinner.style.display = "none";
};

setTimeout(loadImage, 1000);
