function getElementByText(elementId){
    const subTotalField= document.getElementById(elementId);
    const subTotalFieldString = subTotalField.innerText;
    const subTotal = parseInt(subTotalFieldString);

   return subTotal;

}
function textElementBySubTotal(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getElementByText('total-price');
    const currentCaseTotal = getElementByText('case-price');
    
    const subTotalAmount = currentPhoneTotal + currentCaseTotal ;
    textElementBySubTotal('sub-total',subTotalAmount);

    const taxtAmountString = (subTotalAmount * 0.1).toFixed(2);
    const textAmount = parseFloat(taxtAmountString);
    textElementBySubTotal('text-amount',textAmount);


    const finalAmount = subTotalAmount + textAmount;
    textElementBySubTotal('subtotal-amount',finalAmount);
   
}