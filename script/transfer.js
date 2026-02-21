document.getElementById("transfer-btn").addEventListener("click", function(){
    const transferNumber = getValueFromInput("transfer-number");
    console.log(transferNumber);
    if(transferNumber == "" || transferNumber == null){
        alert("Please insert tranfer agent number.");
        return;
    }
    else if(transferNumber.length != 11){
        alert("Invalid agent number");
        return;
    }
    const transferAmount = getValueFromInput("transfer-amount");
    console.log(transferAmount);
    if(transferAmount == "" || transferAmount == null){
        alert("Please insert transfer amount");
        return;
    }

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    
    const newBalance = balance - transferAmount;
    console.log(newBalance);
    
    const transferPin = getValueFromInput("transfer-pin");
    if (transferPin === "1234"){
        alert("Transfer successful");
        balanceElement.innerText = newBalance;

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Transfer ${transferAmount} taka success to ${transferNumber}
            </div>
        `;
        history.append(newHistory);


    }
    else {
        alert("Invalid pin");
    }
    
    
    
});
