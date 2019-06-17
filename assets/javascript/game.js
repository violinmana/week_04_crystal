$(document).ready(function () {

    //Generate Random Number for Crystals
    var ranCrys = function () {
        crystal1 = Math.ceil(Math.random() * 12)
        crystal2 = Math.ceil(Math.random() * 12)
        crystal3 = Math.ceil(Math.random() * 12)
        crystal4 = Math.ceil(Math.random() * 12)
        for (; crystal1 === crystal2;) {
            crystal2 = Math.ceil(Math.random() * 12)
        }
        for (; crystal1 === crystal3 || crystal2 === crystal3;) {
            crystal3 = Math.ceil(Math.random() * 12)
        }
        for (; crystal1 === crystal4 || crystal2 === crystal4 || crystal3 === crystal4;) {
            crystal4 = Math.ceil(Math.random() * 12)
        }
    }

    //Win/Loss/Contine Check
    var winLoss = function () {
        if (totalNum === matchNum && gameEnd === false) {
            gameEnd = true
            wins++
            $('#wins').html(wins)
        } else if (totalNum > matchNum && gameEnd === false) {
            gameEnd = true
            losses++
            $('#losses').html(losses)
        } else if (totalNum < matchNum) {
            gameEnd = false
        }
    }

    //Initialize/Restart Game
    var initialize = function () {
        totalNum = 0
        matchNum = Math.ceil(Math.random() * 102) + 18
        console.log(matchNum)

        ranCrys()
        console.log(crystal1, crystal2, crystal3, crystal4)

        $('#playerTotal').html(totalNum)
        $('#randomMatch').html(matchNum)

        gameEnd = false
    }

    //Global Variables
    var totalNum = 0
    var matchNum = 0
    var gameEnd = false

    var crystal1 = 0
    var crystal2 = 0
    var crystal3 = 0
    var crystal4 = 0

    var wins = 0
    var losses = 0

    //Page Start
    initialize()

    //Crystal Buttons
    $('#button1').on('click', function () {
        if (gameEnd === false) {
            totalNum += crystal1
            $('#playerTotal').html(totalNum)
        }
        winLoss()
    })

    $('#button2').on('click', function () {
        if (gameEnd === false) {
            totalNum += crystal2
            $('#playerTotal').html(totalNum)
        }
        winLoss()
    })

    $('#button3').on('click', function () {
        if (gameEnd === false) {
            totalNum += crystal3
            $('#playerTotal').html(totalNum)
        }
        winLoss()
    })

    $('#button4').on('click', function () {
        if (gameEnd === false) {
            totalNum += crystal4
            $('#playerTotal').html(totalNum)
        }
        winLoss()
    })

    //Restart Button
    $('#restart').on('click', function () {
        if (gameEnd === false) {
            losses++
        }
        initialize()
    })

})