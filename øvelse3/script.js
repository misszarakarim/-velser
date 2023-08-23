const targetNumber = Math.floor(Math.random() * 11);
let numberOfGuesses = 0;

document.querySelector("#tjek").addEventListener("click", () => {
  const userGuess = document.querySelector("#tal").value;
  numberOfGuesses++;

  if (userGuess === "") {
    alert("Indtast venligst et tal.");
    return;
  }

  if (userGuess == targetNumber) {
    alert(`Tillykke! Du gættede rigtigt på ${numberOfGuesses} forsøg.`);
    document.querySelector("#tjek").disabled = true;
  } else if (userGuess < targetNumber) {
    alert("For lavt. Prøv igen.");
  } else {
    alert("For højt. Prøv igen.");
  }
});