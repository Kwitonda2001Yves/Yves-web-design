
// window.addEventListener('scroll',()=>{
//     document.getElementById("nav").classList.toggle('onscroll',window.scrollY>300);
// })

window.addEventListener('scroll',()=>{
    document
    .getElementById("nav")
    .classList.toggle('onscroll',window.scrollY>300);
})

// grenarate button

let button = document.getElementById("btn");
button.onclick = function(){
    console.log("yes Wa clitse!!");
    // alert("yes Wa clitse!!");
    var image = document.createElement('img');
    var div = document.getElementById('created');
    image.src="asssets/photo.jpg";
    div.appendChild(image);
}