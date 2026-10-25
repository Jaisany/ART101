let count = 0;

let buttonCreature = {
    name: "Ofarialnienda",
    species: "Duriandiva",
    favoriteFood: "Feddichini Chicken Alfredo",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused", "perplexed", "suprised"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "I feel  " + currentMood;

    message = message + "<p>I go by " + buttonCreature.name + ".</p>";
    message = message + "<p>I'm a " + buttonCreature.species + ".</p>";
    message = message + "<p>The food I'd crave is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

    

});