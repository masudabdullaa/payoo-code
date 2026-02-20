document.getElementById("cashout-btn").addEventListener("click", function(){
    const cashoutNumber = getValueFromInput("cashout-number");
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid agent number");
        return;
    }

    const cashoutAmount = getValueFromInput("cashout-amount");
    console.log(cashoutAmount);
    
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid amoutn!");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cashout successfull!")
        balanceElement.innerText = newBalance;

        // 1 - history-container id ke dhore anbo
        const history = document.getElementById("history-container");

        // 2 - new div create korbo
        const newHistory = document.createElement("div");
        // 3 - new div innerhtml add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} taka success to ${cashoutNumber}
            </div>
        `;
        // 4 - history container a new dis append korbo
        history.append(newHistory);
    }else {
        alert("Invalid pin");
    }

})

// document.getElementById("cashout-btn").addEventListener("click", function () {
//     // 1 - get the agent number
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid agent number!");
//         return;
//     }

//     // 2 - get the amount
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3 get current balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);
    
//     // 4 - calculate new balance
// const newBalance = Number(balance) - Number(cashoutAmount);

// if(newBalance < 0){
//     alert("Invalid amount");
//     return;
// }

// // 5 - get the pin and verify
// const pinNumberInput = document.getElementById("cashout-pin");
// const pin = pinNumberInput.value;
// if(pin === "1234"){
//     alert("Cashout successfull!");
//     console.log("New Balance", newBalance);
//     balanceElement.innerText = newBalance;
    
//     }else{
//         alert("Invalid pin!");
//         return;
//     }
//     // 5.1 - true, show success alert > set new balance
//     // 5.2 - false show error alert > return

// })