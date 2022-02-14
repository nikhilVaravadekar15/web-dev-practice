let userAgent = navigator.userAgent;
let browser;

if(userAgent.match(/edg/i)){
    browser = "edge";
}else if(userAgent.match(/firefox/i)){
    browser = "firefox";
}else if(userAgent.match(/opr/i)){
    browser = "opera";
}else if(userAgent.match(/safari/i)){
    browser = "safari";
}else if(userAgent.match(/chrome|chromium|crios/i)){
    browser = "chrome";
}

const logo = document.querySelector(`.logos .${browser}`)
if(logo == null){
    alert("Others Browsers are Not Supported");
}else{
    logo.style.opacity = "1";
}

