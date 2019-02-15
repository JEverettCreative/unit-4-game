// Game page loads window before executing code
$(document).ready(function(){

    // Set global variables. Set baselines that aren't intended to change match-to-match
    var goalScore;
    var emeraldNum;
    var citrineNum;
    var rubyNum;
    var sapphireNum;
    var winCounter = 0;
    var lossCounter = 0;
    var playerScore;

    // Initialize game settings for first and resets
    // initalizeGame = function() {
    //     $()
    // }

    // Generate a random Goal Score between 19-120, assign it to HTML element on page
    createRandomGoal = function() {
        goalScore = Math.floor(Math.random() * 103) + 18;
        $("#goal-score").html(goalScore);
    }
    // Generate random numbers for each Gem between 1-12
        // Assign numbers to variables that represent each gem's value
    createGemNumbers = function() {
        emeraldNum = Math.floor(Math.random() * 13);
        citrineNum = Math.floor(Math.random() * 13);
        rubyNum = Math.floor(Math.random() * 13);
        sapphireNum = Math.floor(Math.random() * 13);
        
    }

    // Create on click function for each gem
        // Should add gem's value to User Score

    // Win parameters function
        // If User Score === Goal Score, then 
            // Win counter goes up by 1
            // Add text within Win/Loss box that says "Victory!"
            // Reset function runs to establish new values

    // Lose parameters function
        // If User Score > Goal Score, then 
            // Lose counter goes up by 1
            // Add text within Win/Loss box that says "You lost!"
            // Reset function runs to establish new values




    createRandomGoal();
});