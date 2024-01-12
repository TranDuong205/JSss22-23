const randomNumber = Math.floor(Math.random() *10) + 1

let guessedCorrectly = false

while (!guessedCorrectly) {
    let userGuess = parseInt(prompt("nhap vao tu 1 den 10: "))
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10){
        console.log("nhap 1 so tu so 1 den 10")
    } else {
        if (userGuess === randomNumber) {
            console.log("chinh xac! ban da doan dung")
            guessedCorrectly = true
        } else if (userGuess > randomNumber){
            console.log("lon hon. thu lai di cu")
        } else {
            console.log("nho hon. thu lai tiep di")
        }
    }
}