let mail = 0
let x = 0
basic.forever(() => {
    x = pins.digitalReadPin(DigitalPin.P0)
    if (x == 1) {
        mail = 1
    }
    if (mail == 1) {
        radio.sendNumber(1)
    }
    if (mail == 0) {
        radio.sendNumber(2)
    }
})
radio.onDataPacketReceived(({receivedNumber}) => {
    if (receivedNumber == 3) {
        mail = 0
    }
    if (receivedNumber == 4) {
        radio.sendNumber(5)
    }
})
radio.setGroup(18)
mail = 0
x = 0
