document.getElementById("get-bonus-btn").addEventListener("click", function(){
    console.log("get bonus button clicked");
    const getBonus = getValueFromInput("get-bonus-amount");
    if(getBonus == "" || getBonus == null || getBonus.length != 11){
        alert("Please enter your coupon code");
        return;
    }
    else {
        alert("Coupon code success")
    }
})