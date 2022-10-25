input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
