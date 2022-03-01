radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # # .
            . # . # .
            . # # . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
