document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber = getValueFromInput("cashout-number");
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid agent number");
        return;
    }

    const cashoutAmount = getValueFromInput("cashout-amount");
    console.log(cashoutAmount);
    
    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid amoutn!");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout successfull!")
        setBalance(newBalance);
    }else {
        alert("Invalid pin");
    }

})