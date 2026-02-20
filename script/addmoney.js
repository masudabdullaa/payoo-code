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
        // 1 - history-container id ke dhore anbo
        const history = document.getElementById("history-container");

        // 2 - new div create korbo
        const newHistory = document.createElement("div");
        // 3 - new div innerhtml add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Add money success from ${bankAccount}, account number ${accno}
            </div>
        `;
        // 4 - history container a new dis append korbo
        history.append(newHistory);
    }else {
        alert("Invalid pin");
        return;
    }
    
})
