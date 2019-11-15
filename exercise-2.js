function changeVocals (str) {
  var temp = []
  for (var a = 0; a < str.length; a++) {
    temp.push(str[a])
  }

  var result = '';
    for (var b = 0; b < temp.length; b++) {
      if (temp[b] == 'a') {
        temp[b] = 'b';
      } else
      if (temp[b] == 'A') {
        temp[b] = 'B';
      } else
      if (temp[b] == 'i') {
        temp[b] = 'j';
      } else
      if (temp[b] == 'I') {
        temp[b] = 'J';
      } else
      if (temp[b] == 'u') {
        temp[b] = 'v';
      } else
      if (temp[b] == 'U') {
        temp[b] = 'V';
      } else
      if (temp[b] == 'e') {
        temp[b] = 'f';
      } else
      if (temp[b] == 'E') {
        temp[b] = 'F';
      } else
      if (temp[b] == 'o') {
        temp[b] = 'p';
      } else
      if (temp[b] == 'O') {
        temp[b] = 'P';
      }
      result += temp[b];
    }
  return result;
}

function reverseWord (str) {

  var result = ''
  for (var i = str.length-1; i >= 0; i--) {
    result += str[i]
  }
  return result;
}

function setLowerUpperCase (str) {
  var hurufK = 'abcdefghijklmnopqrstuvwxyz';
  var hurufB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  var temp = [];
  for (var i = 0; i < str.length; i++) {
    temp.push(str[i]);
  }

  var result = '';
  for (var a = 0; a < temp.length; a++) {
  if (temp[a] == ' ') {
    result += temp[a];
  } else
    for (var b = 0; b < hurufK.length; b++) {
      if (temp[a] == hurufK[b]) {
      result += hurufB[b];
      }
    }
    for (var c = 0; c < hurufB.length; c++) {
      if (temp[a] == hurufB[c]) {
      result += hurufK[c];
      }
    }
  }
  return result;
}

function removeSpaces (str) {
  var result = '';
  for (var a = 0; a < str.length; a++) {
    if (str[a] != ' ') {
      result += str[a];
    }
  }
  return result;
}

function passwordGenerator (name) {
  var step1 = changeVocals(name);
  var step2 = reverseWord(step1);
  var step3 = setLowerUpperCase(step2);
  var step4 = removeSpaces(step3);
  
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  return step4;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// console.log(removeSpaces('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(removeSpaces('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(removeSpaces('Alexei')); // 'JFXFLb'
// console.log(removeSpaces('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'