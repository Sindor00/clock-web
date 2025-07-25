// === Soat ===
function updateClock() {
    const clock = document.getElementById("mainClock");
    const now = new Date();
    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    clock.innerText = `${h}:${m}`;
}
setInterval(updateClock, 1000);
updateClock();

// === Menu toggle ===
const topMenu = document.getElementById("topMenu");
document.getElementById("menuToggle").addEventListener("click", () => {
    topMenu.classList.toggle("open");
});

// === Soat dizaynlari ===
const clockElement = document.getElementById("mainClock");
document.querySelectorAll(".design-preview").forEach(preview => {
    preview.addEventListener("click", () => {
        clockElement.className = "main-clock " + preview.dataset.design;
    });
});

// === Fon ranglari ===
document.querySelectorAll(".bg-color").forEach(btn => {
    btn.addEventListener("click", () => {
        const colorMap = {
            color1: "#1e3c72",
            color2: "#ff416c",
            color3: "#00b4db",
            color4: "#ff9a9e",
            color5: "#56ab2f",
            color6: "#ff6600",
            color7: "#66ccff",
            color8: "#cc33ff",
            color9: "#00cc99",
            color10: "#ff0066",
            color11: "#000000ff",
        };
        document.body.style.background = colorMap[btn.dataset.bg];
        document.body.style.backgroundSize = "cover";
    });
});

// === Fon rasm yuklash ===
document.getElementById("bgUpload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.body.style.background = `url(${e.target.result}) center/cover no-repeat`;
        };
        reader.readAsDataURL(file);
    }
});

// === Fullscreen ===
const fullscreenBtn = document.getElementById("fullscreenBtn");
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.innerHTML = `<i class="fi fi-sr-compress"></i>`;
    } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = `<i class="fi fi-sr-expand"></i>`;
    }
});

// Har 30 soniyada soat dizayni avtomatik o'zgaradi
// const designs = ["design1","design2","design3","design4","design5","design6","design7","design8","design9","design10","design11","design12","design13"];
// let currentIndex = 0;
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % designs.length;
//   clockElement.className = "main-clock " + designs[currentIndex];
// }, 30000);
