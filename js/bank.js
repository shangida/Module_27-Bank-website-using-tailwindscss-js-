
//deposit work strats
document.getElementById("deposit_btn").addEventListener("click", function(){
    
    const depoditFlied = document.getElementById("deposit_filed");
    const newDepositAmount = parseFloat(depoditFlied.value);
    
    depoditFlied.value = "";

    if(isNaN(newDepositAmount)){
        alert("please enter a valid deposit amount");
        return;
    }
    
    const previousDepositAmountElement = document.getElementById("deposit_amount");
    const previousDepositAmount = parseFloat(previousDepositAmountElement.innerText);
    
    const curentDepositAmount =  previousDepositAmount + newDepositAmount;

    previousDepositAmountElement.innerText = curentDepositAmount;

    const totalBalanceElement = document.getElementById("total_balance");
    const totalBalance = parseFloat(totalBalanceElement.innerText);

    const curentTotalBalance = totalBalance + newDepositAmount;

    totalBalanceElement.innerText = curentTotalBalance;

    
});
//ends

//withdraw work strats
document.getElementById("withdraw_btn").addEventListener("click", function(){
    
    const withdrawFlied = document.getElementById("withdraw_flied");
    const newWithdrawAmount = parseFloat(withdrawFlied.value);

    withdrawFlied.value = "";

    if(isNaN(newWithdrawAmount)){
        alert("plaese enter valid withdraw amount");
        return;
    }

    const totalBalanceElement =  document.getElementById("total_balance");
    const previousTotalBalance = parseFloat(totalBalanceElement.innerText
        );

        if(previousTotalBalance < newWithdrawAmount){
            alert("bnak a eto taka nai");
            return;
        }

        const withdrawAmountElement = document.getElementById("witthdraw_amount");
        const previousWithdrawAmount = parseFloat(withdrawAmountElement.innerText);
        
        const withdrawAmount = previousWithdrawAmount + newWithdrawAmount;

        withdrawAmountElement.innerText = withdrawAmount;
    
        const curentTotalBalance = previousTotalBalance - newWithdrawAmount;

        totalBalanceElement.innerText = curentTotalBalance;

});
//ends
