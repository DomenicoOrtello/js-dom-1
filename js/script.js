const turnedOnLamp = document.getElementById(`turned-on-lamp`)
const turnedOffLamp = document.getElementById(`turned-off-lamp`)
const toggleOnBtn = document.getElementById(`btn-on`)
 toggleOnBtn.addEventListener(`click`, function () {
    if (turnedOnLamp.classList.contains(`hidden`)) {
        turnedOnLamp.classList.remove(`hidden`)
        turnedOffLamp.classList.add(`hidden`)
        toggleOnBtn.textContent = 'Spegni';
    } else {
        turnedOffLamp.classList.remove(`hidden`)
        turnedOnLamp.classList.add(`hidden`)
        toggleOnBtn.textContent = 'Accendi';
    }
 })