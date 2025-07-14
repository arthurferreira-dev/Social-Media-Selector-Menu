let divList = document.getElementById('lista');
let title = document.getElementById('pad');
let icon = document.getElementById('angle');
var clicks = false;

function MenuAction() {
    if (!clicks) {
        icon.className = 'fa-solid fa-angle-down'
        divList.style.display = 'block'
        clicks = true
    } else {
        icon.className = 'fa-solid fa-angle-up'
        divList.style.display = 'none'
        clicks = false
    }
}

function Facebook() {
    title.innerHTML = '<span class="facebook" style="padding-right: 4px"><i class="fa-brands fa-facebook"></i></span> Facebook'
    PageFace();
}

function Linkedin() {
    title.innerHTML = '<span class="linkedin" style="padding-right: 4px"><i class="fa-brands fa-linkedin"></i></span> Linkedin'
}

function Github() {
    title.innerHTML = '<span class="github" style="padding-right: 4px"><i class="fa-brands fa-github"></i></span> Github'
}

function Twitch() {
    title.innerHTML = '<span class="twitch" style="padding-right: 4px"><i class="fa-brands fa-twitch"></i></span> Twitch'
}

function Threads() {
    title.innerHTML = '<span class="threads" style="padding-right: 4px"><i class="fa-brands fa-threads"></i></span> Threads'
}

function Xbox() {
    title.innerHTML = '<span class="xbox" style="padding-right: 4px"><i class="fa-brands fa-xbox"></i></span> Xbox'
}

function Spotify() {
    title.innerHTML = '<span class="spotify" style="padding-right: 4px"><i class="fa-brands fa-spotify"></i></span> Spotify'
}

function PageFace() {
    
}