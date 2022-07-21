const video = document.getElementById('video')
video.playbackRate = 2.5

function closeMenu() {
    const mobileNav = document.getElementById('mobileNav')
    mobileNav.style.display = "none"
}

function openMenu() {
    const mobileNav = document.getElementById('mobileNav')
    mobileNav.style.display = "flex"
}