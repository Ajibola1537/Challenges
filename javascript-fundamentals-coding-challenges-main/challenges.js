// =================TEST DATA FOR QUESTION 1===========
// Case1:
// const mainCourseCount1 = 2;
// const appetizerCount1 = 1;
// const dessertCount1 = 3;
// const restaurantLocation1 = "Domestic";

 // Welldone, Mr JB for attempting this assignment, I really appreciate. You have demonstarted a general uderstandning of the challemge 
//However, there is an issue with this approach. Subtracting both the discount and service charge from the total bill is incorrect.
 // Instead, the discount should be applied first, and then the service charge should be applied to the discounted total.
// Kindly Fix this at your earliest convenience and revert back to me.
const mainCourseCount1 = 4000;
const appetizerCount1 = 1000;
const dessertCount1 = 500;
const restaurantLocation1 = "International";

const totalBill1 = mainCourseCount1 + appetizerCount1 + dessertCount1
 const totalBill2 = 0.1 * totalBill1  // 10% discount
  const totalBill3 = 0.15 * totalBill1 // 15% discount on all international restaurants
  const mainBill1 = totalBill1 - totalBill2 - totalBill3

  console.log(mainBill1)
//  console.log(totalBill2)
//  console.log(totalBill3)


//Case 2:
// const mainCourseCount2 = 3;
// const appetizerCount2 = 2;
// const dessertCount2 = 2;
// const restaurantLocation2 = "International";

const mainCourseCount2 = 4000;
const appetizerCount2 = 1000;
const dessertCount2 = 500;
const restaurantLocation2 = "Domestic";

const totalBill0= mainCourseCount1 + appetizerCount1 + dessertCount1
 const totalBill02 = 0.1 * totalBill0  // 10% discount
  const mainBill2 = totalBill0 - totalBill02 

  console.log(mainBill2)

// =================TEST DATA FOR QUESTION 2===========
// const age1 = 20;
// const vehicleType1 = "C";
// // Output: "Eligible"

// const age2 = 16;
// const vehicleType2 = "M";
// // Output: "Eligible"

// const age3 = 14;
// const vehicleType3 = "S";
// // Output: "Not Eligible"
// The solution is missing the logic to handle the vehicle type "S" correctly. Currently, it only mentions vehicle types "M" and "C".
const age1 = 20;
const vehicleType1 = "C";
// Output: "Eligible"

const age2 = 16;
const vehicleType2 = "M";
// Output: "Eligible"

const age3 = 14;
const vehicleType3 = "S";
// Output: "Not Eligible"
 const age = prompt("Enter your age");

if ( age >= 16 && age <=17 ){
    console.log(`You can only apply for a vehicle type ${vehicleType3} 0r ${vehicleType2} `)


}
else if ( age < 16){
    console.log( "You are not eligible")

}
else if( age >= 18) {
    console.log(`You are eligible and can apply for a vehicle ${vehicleType1}`)
}
else{
    console.log("You have entered an invalid age")

}
// =================TEST DATA FOR QUESTION 3===========
// There are some variable names that seem to have typos. For example, age is used but not defined anywhere in the code, and Payment
//should probably be purchaseAmount.

//The logic to calculate the new amount after applying the discount is correct.
//However, the logic should differentiate between senior citizen discounts and non-senior discounts based on both age and purchase amount.

// The condition for checking if the payment is greater than 100 is not in line with the requirement. 
//The discount is based on the purchase amount, not the payment.

const customerAge1 = 50;
const purchaseAmount1 = 80;
// Output: 80

const customerAge2 = 65;
const purchaseAmount2 = 120;
// Output: 96

const customerAge3 = 30;
const purchaseAmount3 = 150;
// Output: 135

const customerAge22 = 65
const purchaseAmount = purchaseAmount2 * 0.2
const newAmount =purchaseAmount2 - purchaseAmount 

const customerAge33 = 30
const purchaseAmountt = purchaseAmount3 * 0.1
const newAmountt =purchaseAmount3 - purchaseAmountt


const customerAge11 = 50
// console.log(newAmount);
// console.log(purchaseAmount)
// const age = prompt("Enter your age")
const Payment = prompt ("Enter your payment")

if ( age >=60){
    console.log(`You are eligible for a 20% discount which makes your bill ${newAmount}`)
}
else if ( age < 60){
    console.log("You are not eligible")
}
else if ( Payment > 100){
    console.log(`You are eligible for a 10% discount which makes your bill ${newAmountt}`)

}

