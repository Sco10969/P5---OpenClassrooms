// votre code ici

export default checkAge;

function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age <= 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}
