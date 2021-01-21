input.onGesture(Gesture.Shake, function () {
    // Get random number and put into variable
    choice_number = randint(1, 3)
    // Check id variable is 1, 2 or 3
    if (choice_number == 1) {
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (choice_number == 2) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            # # . # #
            `)
    }
})
let choice_number = 0
// Create Variable will hold the random number
choice_number = 0
basic.showIcon(IconNames.Happy)
