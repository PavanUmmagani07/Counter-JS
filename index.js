let counterVlaue = document.getElementById("counterValue")



function onIncrement(){
    //to update the counter value we need to know the previous value, we are taking previous value text content in HTML 
    let previousCounterValue = counterVlaue.textContent

    //parseInt() converts string into Numeric
    //after converting to numeric we are incrementing the value by one 
    let updatedCounterValue = parseInt(previousCounterValue)+1


    //updating the HTML counter value with updated counter value
    counterVlaue.textContent = updatedCounterValue

    if(updatedCounterValue>0){
        counterVlaue.style.color = "green";
    }
    else if(updatedCounterValue=0){
        counterVlaue.style.color = "black";
    }
    else{
        counterVlaue.style.color = "red"
    }
}

function onReset(){
    counterVlaue.textContent = 0;
    /*let updatedCounterValue = 0;
    counterVlaue.textContent = updatedCounterValue;*/
    counterVlaue.style.color = "black";

}

function onDecrement(){

    let previousCounterValue = counterVlaue.textContent
    let updatedCounterValue = parseInt(previousCounterValue)-1
    counterVlaue.textContent = updatedCounterValue

    if(updatedCounterValue>0){
        counterVlaue.style.color = "green";
    }
    else if(updatedCounterValue<0){
        counterVlaue.style.color = "red";
    }
    else{
        counterVlaue.style.color = "black"
    }
}

