// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
//Luhn Algorithm
function validateCred(arr) {
  //Intially value
  let sum = 0;
  let isEven = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    // i--=i-1 //Looping
    let num = arr[i];
    if (isEven) {
      //Checking even
      num *= 2; //num=num*2
      if (num > 9) {
        //If num greater than 9
        num -= 9; //subtract 9
      }
    }
    sum += num;
    isEven = !isEven; //If not even take modulus mean divide by 10
  }
  return sum % 10 === 0;
}

//console.log(validateCred[[4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]])

function findInvalidCards(batch) {
  let invalidCards = []; //Empty array

  for (let i = 0; i < batch.length; i++) {
    //loop over batch array
    if (!validateCred(batch[i])) {
      invalidCards.push(batch[i]);
    }
  }
  return invalidCards;
}

//invlaidCards=[invalid1,invalid2......, invalid5]
//We have checked whether card is valid or invalid and now we are checking comapnies that have issued invalid credit cards

function idInvalidCardCompanies(invalidCards) {
  let invalidCompanies = []; //Empty Array

  //I am placing switch inside for loop becuase i want for loop to apply on all switch statements

  for (let i = 0; i < invalidCards.length; i++) {
    let firstDigit = invalidCards[i][0].toString();
    switch (firstDigit) {
      case "3":
        if (invalidCompanies.indexOf("Amex") === -1) {
          invalidCompanies.push("Amex");
        }
        break;
      case "4":
        if (invalidCompanies.indexOf("Visa") === -1) {
          invalidCompanies.push("Visa");
        }
        break;
      case "5":
        if (invalidCompanies.indexOf("Mastercard") === -1) {
          invalidCompanies.push("Mastercard");
        }
        break;
      case "6":
        if (invalidCompanies.indexOf("Discover") === -1) {
          invalidCompanies.push("Discover");
        }
        break;
      default:
        console.log("Company not found");
    }
  }
  return invalidCompanies;
}

//TESTING THEM OUT

// Example credit card numbers array
const creditCardNumbers = [
  [
    6011111111111117, 6011000990139424, 6011000990139424, 6011111111111117,
    371449635398431,
  ],
  [
    4556782452323123, 4556782452323123, 4556782452323123, 4556782452323123,
    4556782452323123,
  ],
  [
    5428072896563099, 5428072896563099, 5428072896563099, 5428072896563099,
    5428072896563099,
  ],
  [
    343112345678903, 341112345678903, 348112345678903, 342112345678903,
    340112345678903,
  ],
];
console.log(creditCardNumbers[0][0]); //6011111111111117 , Main array's -> first array

console.log(validateCred(creditCardNumbers[0][0])); //TESTING CRED FUNCTION

console.log(findInvalidCards(creditCardNumbers)); //TESTING INVALID CARD FUNCTION

//For testing idInvalidCardCompanies
let invalidCards = [
  [4, 5, 5, 6, 7, 8, 2, 4, 5, 2, 3, 2, 3, 1, 2, 3], // invalid Visa card
  [3, 7, 9, 9, 1, 0, 0, 5, 5, 8, 0, 1, 5, 5, 8, 0], // invalid Amex card
  [5, 1, 6, 3, 7, 0, 8, 6, 5, 7, 2, 8, 8, 7, 0, 6], // invalid Mastercard card
  [6, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // invalid Discover card
];
console.log(idInvalidCardCompanies(invalidCards));
