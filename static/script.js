function calculate() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;

    fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            num1: num1,
            num2: num2,
            operator: operator
        })
    })
    .then(response => response.json())
    .then(data => {

        if (data.error) {
            document.getElementById("result").innerText =
                "Error: " + data.error;
        } else {
            document.getElementById("result").innerText =
                "Result: " + data.result;
        }

    });
}