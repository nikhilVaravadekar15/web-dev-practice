const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const clock = () => {
    let date = new Date();
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
            ss = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mm/12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`    
}

setInterval(clock, 1000);

// clock__digital

const text_hour = document.getElementById("clock__text__hours");
const text_minutes = document.getElementById("clock__text__minutes");
const text_ampm = document.getElementById("clock__text__ampm");

const text_day = document.getElementById("clock__date__day");
const text_month = document.getElementById("clock__date__month");
const text_year = document.getElementById("clock__date__year");

const date__textFormat = document.getElementById("clock__date__textFormat");
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const clockText = () =>{
    let date = new Date();
    let hh = date.getHours(),
        mm = date.getMinutes(),
        ampm,
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

        // 24 to 12 
        if(hh >= 12){
            hh = hh - 12;
            ampm = "PM";
        }else{
            ampm ="AM";
        }

        if(hh == 0 ){
            hh = 12;
        }

        if (hh < 10){
            hh = `0${hh}`;
        }

        if (mm < 10){
            mm = `0${mm}`;
        }

        text_hour.innerHTML = `${hh} : `;
        text_minutes.innerHTML = `${mm}`;
        text_ampm.innerHTML = `${ampm}`;
    
        if(day < 10){
            day = `0${day}`;
        }
        if(month < 10){
            month = `0${month}`;
        }
        if(year < 1000){
            if(year < 100){
                year = `00${year}`;
            }
            if(year < 10){
                year = `000${year}`;
            }
            year = `0${year}`;            
        }

        text_day.innerHTML = `${day} /`;
        text_month.innerHTML = `${month} /`;
        text_year.innerHTML = `${year}`;
        date__textFormat.innerHTML = `${months.at(month)} ${day}, ${year}`;
        
}

setInterval(clockText, 1000)




// /*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bxs-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })
