localStorage.setItem("rate", 0);
let rating = document.querySelectorAll("li")
rating.forEach(element => {
    element.addEventListener("click", function() {
        var rate = element.getAttribute("rate") 
        let x = rate 
        localStorage.setItem("rate", rate);
        //console.log(x)
    })
});

function submit(){
    let rate = localStorage.getItem("rate")
    if (rate!=0){
        window.location.assign("ThankYou.html")
    }    
}