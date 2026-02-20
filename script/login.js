document.getElementById("login-btn")
    .addEventListener("click", function () {
        // 1 - get the mobile number from input
        const numberInput = document.getElementById("input-number");
        const contactNumber = numberInput.value;

        // 2 - get the pin number from input
        const inputPin = document.getElementById("input-pin");
        const pin = inputPin.value;

        // 3 - match pin and mobile number
        if (contactNumber == "01234567890" && pin == "1234") {
            // 3.1 - if true >> success alert > homepage
            alert("Login success");

            // window.location.replace("/home.html");
            window.location.assign("./home.html");
        }
        else {
            // 3.2 - if false >> alert > return
            alert("login failed")
            return;
        }
    })