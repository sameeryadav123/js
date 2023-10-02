let button = document.getElementById("order-btn");

function randomTime(){
    return Math.floor(Math.random() * 1000) + 1; 
}
button.addEventListener("click",function(){
    setTimeout(function(){
        new Promise(function (resolve, reject){
            
            document.getElementById("hidden").style.display = "block";
            resolve("completed");
        }).then(function(res) {
            console.log(res);
            generateRandomNum();
        });
    }, randomTime());
    function generateRandomNum() {
        let spanForNumber = document.getElementById('order-number');
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        spanForNumber.textContent = randomNumber;
    }
}


)