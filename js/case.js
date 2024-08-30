function updateTotalElement(update){
    const caseInputField = document.getElementById('case-input');
    const caseInputFieldString = caseInputField.value;
    const previousCaseNumber = parseInt(caseInputFieldString);

    let newCaseNumber ;
    if( update == true ){
        newCaseNumber = previousCaseNumber +1 ;
    }
    else{
        newCaseNumber = previousCaseNumber -1 ;
    }
    caseInputField.value = newCaseNumber ;
    return newCaseNumber ;
}
function updateTotalPrice (newCaseNumber){
    
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-price');
  caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case').addEventListener('click',function(){
  const newCaseNumber = updateTotalElement(true);
  updateTotalPrice(newCaseNumber);
  calculateSubTotal();


}) 

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateTotalElement(false);

  updateTotalPrice(newCaseNumber);
  calculateSubTotal();

    
}) 