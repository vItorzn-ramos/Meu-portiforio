document.addEventListener("mousemove", function(e) {
    const light = document.createElement("div");

    light.style.position = "fixed";
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
    light.style.width = "10px";
    light.style.height = "10px";
    light.style.background = "#38bdf8";
    light.style.borderRadius = "50%";
    light.style.pointerEvents = "none";
    light.style.boxShadow = "0 0 15px #38bdf8";
    light.style.transform = "translate(-50%, -50%)";
    light.style.zIndex = "9999";

    document.body.appendChild(light);

    setTimeout(() => {
        light.remove();
    }, 200);
});