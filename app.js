//listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
   // hide results
   document.getElementById('results').style.display='none';
   // display loder 
   document.getElementById('loading').style.display='block';
   setTimeout(calculateResult,1000);
    e.preventDefault();
});


// calculate result

function calculateResult(e){
    console.log('Calculating....');
    //UI variabls
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment =parseFloat(years.value)*12;
    // compute monthly payment
    const x = Math.pow(1+calculatedInterest , calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);
        if(isFinite(monthly)){
            monthlyPayment.value =monthly.toFixed(2);
            totalPayment.value   = (monthly*calculatedPayment).toFixed(2);
            totalInterest.value  = ((monthly*calculatedPayment)-principal).toFixed(2);
                // show resuts
            document.getElementById('results').style.display='block';
                // hide loader
            document.getElementById('loading').style.display='none';
        }else{
        
                showErr('please check your numbers')
               // console.log('please check your numbers');
            }

   
}
//show err
function showErr(err){
       // hide resuts
   document.getElementById('results').style.display='none';
       // hide loader
   document.getElementById('loading').style.display='none';

    // create a div
    const errorDiv =document.createElement('div');

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //add class
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div

    errorDiv.appendChild(document.createTextNode(err));

    // Insert error above heading 
    card.insertBefore(errorDiv,heading);
    setTimeout(clearError,3000);

}
// clear error
function clearError(){
    document.querySelector('.alert').remove();

}