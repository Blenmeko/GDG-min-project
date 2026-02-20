function checkBudget() {

    let budgetInput = prompt("Enter your budget:");
    if(budgetInput=== null){
        alert("Cancelled.");
        return;
    }
    let priceInput = prompt("Enter item price:");
    if(priceInput === null){
        alert("Cancelled.");
        return;
    }
    let savingsInput = prompt("Enter your savings (enter 0 if none):");
     if(savingsInput === null){
        alert("Cancelled.");
        return;
     }
     let budget = Number(budgetInput);
     let price = Number(priceInput);
     let savings = Number(savingsInput);

    if (isNaN(budget)||isNaN(price)||isNaN(savings)){
        alert("Please enter valid numbers only.");
        return;
    }
    let total = budget + savings;

    if (total >= price) {
        alert("You can afford it!");
    } else {
        alert("You cannot afford it.");
    }

}
