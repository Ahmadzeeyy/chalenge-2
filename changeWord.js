function changeWord (selectText, changeText, text){
    return text.replace(selectText , changeText);
}
const kalimat = "Andini sangat mencintai kamu"
const kalimat2 = "bromo adalah gunung paling tinggi"
console.log(changeWord("mencintai","membenci",kalimat));
console.log(changeWord("bromo","rinjani",kalimat2));