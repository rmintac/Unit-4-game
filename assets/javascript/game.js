

    var one = Math.floor(Math.random() * 12 + 1);
    var two = Math.floor(Math.random() * 12 + 1);
    var three = Math.floor(Math.random() * 12 + 1);
    var four = Math.floor(Math.random() * 12 + 1);
    var compChoice = Math.floor(Math.random() * 120 + 19);
    // console.log(compChoice);

    
    $("#computerNumber").text("Match this number: " + compChoice);
    var result = 0; 
    $("#userNum").text(result);
    var wins = 0; 
    $(".wins").text("Wins: " + wins)
    var losses = 0; 
    $(".losses").text("Losses: " + losses);


    function winner() {
        wins++;
        $(".wins").text("Wins: " + wins);
    }

    function loser() {
        losses++;
        $(".losses").text("Losses: " + losses);
    };

    function surpassed() {
        if (result > compChoice)
        result = 0;
        $("#userNum").text(result);
        one = Math.floor((Math.random() * 12) + 1);
        two = Math.floor((Math.random() * 12) + 1);
        three = Math.floor((Math.random() * 12) + 1);
        four = Math.floor((Math.random() * 12) + 1);
        compChoice = Math.floor((Math.random() * 120) + 19);

        $("#computerNumber").text("Match this number: " + compChoice);
    }

    $(".one").on("click", function () {
        result = result + one;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".two").on("click", function () {
        result = result + two;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".three").on("click", function () {
        result = result + three;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })

    $(".four").on("click", function () {
        result = result + four;
        // console.log(result);
        $("#userNum").text(result);

        if (result === compChoice) {
            winner();
        } else if (result > compChoice) {
            loser();
            surpassed();
        }
    })
