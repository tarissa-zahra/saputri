
   // Alert sambutan
window.onload = () => {
  alert("Selamat Hari Anak Nasional! 🎈");
  startConfetti();
  spawnBalloons();
};

// Tombol rayakan
document.getElementById("celebrateBtn").addEventListener("click", () => {
  alert("Mari rayakan Hari Anak Nasional dengan penuh cinta!");
});

// Tambahkan pesan
document.getElementById("sendBtn").addEventListener("click", () => {
  const msg = document.getElementById("messageInput").value;
  if (msg.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("messageList").appendChild(li);
    document.getElementById("messageInput").value = "";
  }
});

// Confetti
function startConfetti() {
  const images = [
    "https://cdn-icons-png.flaticon.com/512/1888/1888859.png",
    "https://cdn-icons-png.flaticon.com/512/14989/14989212.png",
    "https://cdn-icons-png.flaticon.com/512/375/375208.png"
  ];
  setInterval(() => {
    const conf = document.createElement("div");
    conf.classList.add("confetti");
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.animationDuration = 3 + Math.random() * 2 + "s";
    conf.style.backgroundImage = `url(${images[Math.floor(Math.random()*images.length)]})`;
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(), 5000);
  }, 400);
}

// Balon terbang
function spawnBalloons() {
  const container = document.querySelector(".balloon-container");
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = `hsl(${Math.random()*360},70%,70%)`;
    balloon.style.animationDuration = (8 + Math.random()*5) + "s";
    container.appendChild(balloon);
  }
}