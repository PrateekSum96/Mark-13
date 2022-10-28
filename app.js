function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join("");
  return reversedStr;
}
function isPalindrome(str) {
  var reverse = reverseStr(str);
  return reverse === str;
}
function convertDateToStr(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();
  return dateStr;
}
function getDateInAllFormats(date) {
  var dateStr = convertDateToStr(date);
  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.day + dateStr.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
  var listOfPalindrome = getDateInAllFormats(date);
  var msg = "";
  for (var i = 0; i < listOfPalindrome.length; i++) {
    if (isPalindrome(listOfPalindrome[i])) {
      msg = "Yey!! Your birthday is Palindrome🥳🥳.";
      break;
    } else {
      msg = "Nooooo!! Your birthday is not Palindrome😒😒.";
    }
  }
  return msg;
}

var dateInputRef = document.querySelector("#birthday-input");
var showDateRef = document.querySelector("#show-btn");
var resultRef = document.querySelector("#result");

function clickHandler() {
  var bdayStr = dateInputRef.value;

  if (bdayStr !== "") {
    var listOfDate = bdayStr.split("-");
    var date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    };
    var checkPalindrome = checkPalindromeForAllDateFormats(date);
    resultRef.innerText = checkPalindrome;
  }
}
showDateRef.addEventListener("click", clickHandler);
