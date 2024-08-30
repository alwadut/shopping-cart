function updatePhoneNumber(update){
    const phoneInputField = document.getElementById('phone-total');
    const phoneInputFieldElement = phoneInputField.value;
    const previousPhoneNumber = parseInt(phoneInputFieldElement);

    let newPhonenumber;
    if(update == true ){
        newPhonenumber = previousPhoneNumber +1;
    }
    else{
        newPhonenumber = previousPhoneNumber -1;

    }

    phoneInputField.value = newPhonenumber;
    return newPhonenumber;
}
function updatePhonePrice(newPhonenumber){

    const totalPhonePrice = newPhonenumber * 1219 ;
    const phonePriceField = document.getElementById('total-price');
    phonePriceField.innerText = totalPhonePrice;

}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhonenumber= updatePhoneNumber(true);
    updatePhonePrice(newPhonenumber);
    calculateSubTotal();


})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhonenumber= updatePhoneNumber(false);
    updatePhonePrice(newPhonenumber);
    calculateSubTotal();
})