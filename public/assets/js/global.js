//Sidebar functions
let sidenav = document.getElementById("sidenav");

function toggleSide() {
    if(sidenav.clientWidth === 0){
        console.log(document.getElementById("sidenav").clientWidth);
        sidenav.style.display = "block";
        sidenav.style.width = "300px";
    }else{
        console.log(document.getElementById("sidenav").clientWidth);
        sidenav.style.width = "0";
    }
}

