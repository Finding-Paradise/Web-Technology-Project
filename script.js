function DarkMode() {
    var bgTheme = document.body;
    var logo = document.getElementById('logo');
    var navLinks = document.querySelector('.nav-links');
    var mainBlock = document.querySelector('.main-content');
    var themeIconSrc = document.getElementById('theme-changing-icon').src;
    var themeIcon = document.getElementById('theme-changing-icon');
    var pfp = document.querySelector('.pfp');
    var info = document.querySelector('.intro');
    var gif = document.getElementById('sunset');
    bgTheme.classList.toggle('dark-theme');
    logo.classList.toggle('dark-logo');
    navLinks.classList.toggle('dark-nav-links');
    mainBlock.classList.toggle('dark-main-content');
    if (themeIconSrc.indexOf("images/icons8-smiling-sun-96.png")!=-1) {
        themeIcon.src = "images/icons8-sad-sun-96.png";
    } else {
        themeIcon.src = "images/icons8-smiling-sun-96.png";
    }
    pfp.src = "images/stud_photo.php.jpeg";
    gif.src = "images/patrick.gif";
    gif.style.marginTop = '100px';
    info.textContent = "Welcome to my place. My name is Ariet. I'm proffesional burger eater";
    console.log('I am working!');
}
