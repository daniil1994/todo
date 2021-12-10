let profile = document.querySelector('.menu-profile')
let hidden = document.querySelector('.hidden')
let openmenu = document.querySelector('.profile-menu__icon')
let summtask = document.querySelectorAll('.li-task')
let fulltask = document.querySelectorAll('.fulltask')


openmenu.onclick = function () {
    profile.classList.toggle('hidden');
}

document.getElementById("summatasik").innerHTML = summtask.length;
