document.getElementById("add-money-btn").addEventListener("click", function(){
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank")
        return;
    }
    // 2 - get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid acc no")
        return;
    }
    const amount = getValueFromInput("add-money-amount");
    
    const newBalance = getBalance() + Number(amount);
    console.log(newBalance);
    
    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add money success from ${bankAccount}`);
        setBalance(newBalance);
    }else {
        alert("Invalid pin");
        return;
    }
    
})
