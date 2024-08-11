// Var HEADER
const header = document.querySelector("header")
// Var MAIN
const sections = document.querySelectorAll("section")


function header_offset_calc(){
    sections[0].style.marginTop = `${header.offsetHeight - 0.6}px`
}
function home_height_calc(){
    let home_height
    if(window.screen.orientation.angle === 0){
        home_height = window.innerHeight - header.offsetHeight + 1
    } else{
        home_height = window.innerWidth - header.offsetHeight + 1
    }
    sections[0].style.minHeight = `${home_height}px`
}


window.addEventListener("resize", function() {
    header_offset_calc()
    home_height_calc()
})


header_offset_calc()
home_height_calc()