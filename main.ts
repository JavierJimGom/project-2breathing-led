basic.showIcon(IconNames.Happy)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        pins.analogWritePin(AnalogPin.P16, index)
        basic.pause(10)
    }
    for (let index = 0; index <= 255; index++) {
        pins.analogWritePin(AnalogPin.P16, 255 - index)
        basic.pause(10)
    }
})
