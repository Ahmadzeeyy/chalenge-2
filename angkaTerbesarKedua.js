var numbers = [9, 15, 10, 19, 11, 2];

function angkaTerbesarKedua(n) {
    const results = n.filter((item) => {
       return item !== Math.max(...n)
    });
    return Math.max(...results);
}
console.log(angkaTerbesarKedua(numbers));