let value = 0
basic.forever(function () {
    value = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(value)
})
