document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid agent number!");
        return;
    }

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
       
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    
    const newBalance = Number(balance) - Number(cashoutAmount);

    if(newBalance < 0){
        alert("Invalid amount!");
        return;
    }
    
    const pinNumberInput = document.getElementById("cashout-pin");
    const pin = pinNumberInput.value;
    console.log(pin);
    if(pin === "1234"){
        alert("Login successfully");
        console.log("New balance", newBalance);
        balanceElement.innerText = newBalance;
    }else{
        alert("Incorrect pin");
        return;
    }

})
