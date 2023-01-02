var sidemnu = document.getElementById("sidemenu");

function openmenu(){
    sidemnu.style.right="0";
}

function closemenu(){
    sidemnu.style.right="-200px";
}

var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-themes")){
        icon.src="sun.png";
    }else{
        icon.src="moon.png";
    }
}

var typed=new Typed(".auto-type", {
    strings: ["UI/UX Designer" , "Web Developer" , "Programmer"],
    typeSpeed : 150,
    backSpeed : 130,
    loop : true 
})
