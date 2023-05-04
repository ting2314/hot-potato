let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Chessboard)
    while (timer == 0) {
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
})
