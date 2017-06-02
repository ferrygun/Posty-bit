let batt = 0
let mail = 0
radio.onDataPacketReceived(({receivedNumber}) => {
    if (receivedNumber == 1) {
        mail = 1
    }
    if (receivedNumber == 2) {
        mail = 2
    }
    if (receivedNumber == 5) {
        batt = 1
    }
})
input.onButtonPressed(Button.A, () => {
    if (batt == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (mail == 1 && batt == 1) {
        mail = 0
        batt = 0
        radio.sendNumber(3)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # . # #
            # . # . #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (mail == 2 && batt == 1) {
        mail = 0
        batt = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(18)
mail = 0
batt = 0
