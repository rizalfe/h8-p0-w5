function sorting(arrNumber) {
    if (arrNumber.length == 0) {
        return '[]';
    }
    else {
        var hasil = [];
        for (var a = 0; a < arrNumber.length; a++) {
            for (var b = a + 1; b < arrNumber.length; b++) {
                if (arrNumber[b] > arrNumber[a]) {
                    hasil = arrNumber[a];
                    arrNumber[a] = arrNumber[b];
                    arrNumber[b] = hasil;
                }
            }
        }
    }
    // console.log(arrNumber)
    return arrNumber[0];
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length == 0) {
        return '[]';
    }
    else {
        var hasil = 0;
        var angkaTerbesar = sorting(arrNumber);
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] == angkaTerbesar) {
                hasil++;
            }
        }
    }
    return hasil;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(arrNumber);
    
    if (arrNumber.length == 0) {
        return '[]';
    }
    else {
        return `angka paling besar adalah ${listSort} dan jumlah kemunculan sebanyak ${countHighest} kali`;
    }
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''