
  //Leap Year Checke

function checkLeapYear() {
    let  year = document.getElementById("yearInput").value;
    let  result = document.getElementById("result");

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result.textContent = year + " a leap!.";
    } else {
        result.textContent = year + " not a leap!.";
    };
};




//Ticket Pricing

function calculateTicketPrice() {
    // G
    let age = parseInt(document.getElementById("ageInput").value);
    let ticketPrice;

    // 
    switch(true) {
        case (age <= 12):
            ticketPrice = 10;
            break;
        case (age >= 13 && age <= 17):
            ticketPrice = 15;
            break;
        default:
            ticketPrice = 20;
    };

  
    document.getElementById("ticketPrice").textContent = "Ticket Price: $" + ticketPrice;
};



//Palindrome Checker

function isPalindrome(str) {
 
  if (str.length <= 1) {
    return true;
  };

  
  var firstChar = str[0].toLowerCase().replace(/[^a-z0-9]/g, '');
  var lastChar = str[str.length - 1].toLowerCase().replace(/[^a-z0-9]/g, '');

  
  if (firstChar === lastChar) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  };
};

function checkPalindrome() {
  var input = document.getElementById('palindromeInput').value;
  var result = isPalindrome(input);
  if (result) {
    document.getElementById('palindromeResult').innerHTML = "The input string is a palindrome.";
  } else {
    document.getElementById('palindromeResult').innerHTML = "The input string is not a palindrome.";
  };
};


//power function 

function power(base, exponent) {
  
  if (exponent === 0) {
    return 1;
  }
  
  return base * power(base, exponent - 1);
}

function calculatePower() {
  var base = parseInt(document.getElementById('base').value);
  var exponent = parseInt(document.getElementById('exponent').value);
  var result = power(base, exponent);
  document.getElementById('result1').innerHTML = "Result: " + result;
}