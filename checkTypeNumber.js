function checkTypeNumber (givenNumber){
    if (typeof givenNumber == "number" && givenNumber % 2 === 0) {
        console.log("GENAP");
    } else if (typeof givenNumber == "number" && givenNumber % 2 === 1) {
        console.log("GENAP");
    } else {
        console.log("Eror: Invalid data type");
    }

}   
checkTypeNumber([])

