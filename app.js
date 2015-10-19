function showAutocomplete() {
  var input = document.querySelector("input[name=name]");
  var inputVal = input.value;
  var fruits = ["Apple", "Banana", "Orange"];
  var result = [];
  if (inputVal.length > 0) {
    for (var i=0; i < fruits.length; i++){
      if (fruits[i].toLowerCase().includes(inputVal.toLowerCase())){
        result.push(fruits[i]);
      }
    }
    // console.log(result);
  }
  
  var div = document.getElementById('result');
  div.innerHTML = "";
  for (var j=0; j < result.length; j++){
    div.innerHTML = div.innerHTML + result[j]+"<br>";
  }  
} 