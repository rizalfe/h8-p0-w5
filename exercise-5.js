function kaliTerusRekursif(angka) {
    if (angka < 10) {
        return angka;
    } else
    var a = 0;
    if (angka > 10) {
        a = angka % 10 * kaliTerusRekursif(Math.floor(angka / 10))
        var b = 0;
        if (a < 10) {
            return a;
        } else
        b = a % 10 * kaliTerusRekursif(Math.floor(a / 10))
        if (b < 10) {
            return b;
        } else
        return b % 10 * kaliTerusRekursif(Math.floor(b / 10))
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6