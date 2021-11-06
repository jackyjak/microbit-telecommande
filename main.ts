makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    couleur = 240
    strip.showColor(neopixel.hsl(couleur, 255, 255))
    basic.showNumber(couleur)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    couleur = 0
    strip.showColor(neopixel.hsl(couleur, 255, 255))
    basic.showNumber(couleur)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    couleur += 15
    strip.showColor(neopixel.hsl(couleur, 255, 255))
    basic.showNumber(couleur)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    strip.setBrightness(128)
    basic.showNumber(128)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    strip.setBrightness(255)
    basic.showNumber(255)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    couleur = 120
    strip.showColor(neopixel.hsl(couleur, 255, 255))
    basic.showNumber(couleur)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    couleur += 15
    strip.showColor(neopixel.hsl(couleur, 255, 255))
    basic.showNumber(couleur)
})
let couleur = 0
let strip: neopixel.Strip = null
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
strip = neopixel.create(DigitalPin.P0, 160, NeoPixelMode.RGBW)
couleur = 0
basic.showIcon(IconNames.Heart)
