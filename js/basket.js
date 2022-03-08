const htmlH3 = document.getElementById("counterValue");

let count = 1;
htmlH3.innerHTML = count;


function countUp(){

    count++;
    htmlH3.innerHTML = count;

    if(count >0) {
        document.getElementById("decrease").disabled = false; 
        document.getElementsByTagName("button")[0].style.backgroundColor = "";
    }

}

function countDown() {
    count--;
    htmlH3.innerHTML = count;

    if(count ==0) {
        document.getElementById("decrease").disabled = true; 
        document.getElementsByTagName("button")[0].style.backgroundColor = "grey";
    }

}