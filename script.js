function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
 function alert(){
   message => {
    if(message == 'OK'){
        swal("Good job!", "You clicked the button!", "success");
    }
    else{
        swal("Ups, this went bad!", "You clicked the button!", "error");
    }
   }
 }