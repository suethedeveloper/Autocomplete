var arrList = [];

function showAutocomplete(field, arr, displayResult) {
  //array created by user
  if (arr.length < 1) {
    arr = arrList;
  }
  
  //get a text from user input
  var input = document.querySelector(field);
  console.log('input', input);
  var inputVal = input.value;
  var result = [];

  if (inputVal.length > 0) {
    //Loop through arr arrary and see if there is any match of word that contains a string from user input
    for (var i=0; i < arr.length; i++){
      if (arr[i].toLowerCase().includes(inputVal.toLowerCase())){
        result.push(arr[i]);
      }
    }
  }
  
  var div = document.getElementById(displayResult);
  div.innerHTML = "";
  //if there is any match from user input then display
  for (var j=0; j < result.length; j++){
    div.innerHTML = div.innerHTML + result[j]+"<br>";
  }  
} 

//A user's own creation of a list
function createList(){
  var arrItem = document.querySelector("input[name=list]").value;

  if (arrItem.length > 0) {
    arrList.push(arrItem);
  }

  document.querySelector("input[name=list]").value = "";
  var showListDiv = document.getElementById('showListDiv');
  showListDiv.innerHTML = "";
  //if there is any match from user input then display
  for (var k=0; k < arrList.length; k++){
    showListDiv.innerHTML = showListDiv.innerHTML + arrList[k]+"<br>";
  }   
  return arrList;
}

function showCreatedList(){
  document.getElementById('createList').style.display = "none";
  document.getElementById('divShowList').style.display = "block";
}