let count = 0;

let buttonCreature = {
    name: "Flora",
    species: "Terraformian",
    favoriteFood: "Fiddlehead Ferns",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused", "perplexed", "suprised"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "They can feel  " + currentMood;

    message = message + "<p>She goes by " + buttonCreature.name + ".</p>";
    message = message + "<p>They are a " + buttonCreature.species + ".</p>";
    message = message + "<p>The food she loves is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

    

});

function askNumber(whatNumber) {
    let userNumber = prompt("How many years? (Hint: Really long time)");

    if (userNumber == whatNumber) {
        $("#output2").html("You got it! Impressive!");
    }
    else {
        $("#output2").html("Nope! Nice try bucko!");
    }
}

$("#good-button").click(function () {
    askNumber(500);
});