
function AccendiSpegni() {

    const imgEl = document.getElementById('lamp')
    const btnEl = document.getElementById('btn')
    console.log(imgEl, btnEl);
    if (imgEl.src.indexOf('assets/white_lamp.png') > 0) {
        imgEl.src = 'assets/yellow_lamp.png';
        btnEl.innerText = "Spegni";
    } else {
        imgEl.src = 'assets/white_lamp.png';
        btnEl.innerText = "Accendi";
    }

}



