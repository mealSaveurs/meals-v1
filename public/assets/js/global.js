//Sidebar functions
let sidenav = document.getElementById("sidenav");

function toggleSide() {
    if(sidenav.clientWidth === 0){
        console.log(document.getElementById("sidenav").clientWidth);
        sidenav.style.display = "block";
        sidenav.style.transitionDuration = "50ms";
        sidenav.style.opacity = "1";
        sidenav.style.width = "250px";
    }else{
        console.log(document.getElementById("sidenav").clientWidth);
        sidenav.style.width = "0";
        sidenav.style.opacity = "0";
    }
}



