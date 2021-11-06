// makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
// basic.showArrow(ArrowNames.West)
// })
// makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
// basic.showArrow(ArrowNames.East)
// })
// makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
// basic.showArrow(ArrowNames.North)
// })
// makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
// basic.showArrow(ArrowNames.South)
// })
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showNumber(makerbit.irButton())
    basic.pause(200)
    basic.clearScreen()
})
makerbit.onIrDatagram(function () {
	
})
basic.showNumber(0)
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
basic.forever(function () {
	
})
