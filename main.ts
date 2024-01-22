namespace SpriteKind {
    export const npc = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(tiles.getTileLocation(7, 36), sprites.castle.tilePath5)
        holding = true
        cococount = 1
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro == false) {
        characterAnimations.setCharacterState(coconutgrabber, characterAnimations.rule(Predicate.FacingUp))
        coconutgrabber.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e e e e e e f . . . 
            . . f e e e e e e e e e e f . . 
            . . f e e e e e e e e e e f . . 
            . . f e e e e e e e e e e f . . 
            . . f e e e e e e e e e e f . . 
            . f e e e e e e e e e e e e f . 
            . f e e e e e e e e e e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (holding && cococount > 0 && characterAnimations.matchesRule(coconutgrabber, characterAnimations.rule(Predicate.FacingLeft))) {
        cocoshoot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f e e e e e e e f . . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e f e f . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b b e e e e e e e f . . . 
            . . . f b b b b e e e f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, coconutgrabber, -100, 0)
        cococount += -1
        timer.after(1000, function () {
            sprites.destroy(cocoshoot, effects.trail, 500)
        })
    } else if (holding && cococount > 0 && characterAnimations.matchesRule(coconutgrabber, characterAnimations.rule(Predicate.FacingRight))) {
        cocoshoot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f e e e e e e e f . . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e f e f . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b b e e e e e e e f . . . 
            . . . f b b b b e e e f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, coconutgrabber, 100, 0)
        cococount += -1
        timer.after(1000, function () {
            sprites.destroy(cocoshoot, effects.trail, 500)
        })
    } else if (holding && cococount > 0 && characterAnimations.matchesRule(coconutgrabber, characterAnimations.rule(Predicate.FacingDown))) {
        cocoshoot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f e e e e e e e f . . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e f e f . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b b e e e e e e e f . . . 
            . . . f b b b b e e e f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, coconutgrabber, 0, 100)
        cococount += -1
        timer.after(1000, function () {
            sprites.destroy(cocoshoot, effects.trail, 500)
        })
    } else if (holding && cococount > 0 && characterAnimations.matchesRule(coconutgrabber, characterAnimations.rule(Predicate.FacingUp))) {
        cocoshoot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f e e e e e e e f . . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e f e f . . . 
            . . f e e e e e f e e e f . . . 
            . . f e e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b e e e e e e e e f . . . 
            . . f b b e e e e e e e f . . . 
            . . . f b b b b e e e f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, coconutgrabber, 0, -100)
        cococount += -1
        timer.after(1000, function () {
            sprites.destroy(cocoshoot, effects.trail, 500)
        })
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro == false) {
        characterAnimations.setCharacterState(coconutgrabber, characterAnimations.rule(Predicate.FacingLeft))
        coconutgrabber.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f e e e e e e f f . . . . 
            . . f e e e e e e e e f f . . . 
            . . f e e e e e e e e e f . . . 
            . f e e e e e e e e e e f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro == false) {
        characterAnimations.setCharacterState(coconutgrabber, characterAnimations.rule(Predicate.FacingRight))
        coconutgrabber.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e e e f . . . 
            . . . f f e e e e e e e e f . . 
            . . . f e e e e e e e e e f . . 
            . . . f e e e e e e e e e e f . 
            . . . f e e e e f f f f e e f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (intro == false) {
        characterAnimations.setCharacterState(coconutgrabber, characterAnimations.rule(Predicate.FacingDown))
        coconutgrabber.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f f e e e e e e f f . . . 
            . . f f e e e e e e e e f f . . 
            . . f e e e e e e e e e e f . . 
            . . f e e f f f f f f e e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
function intro2 () {
    intro = true
    playerspawned = 1
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222244444442222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222224444444444444444444444222222442222222222222222222442222222244444442222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222224444444444444444444444222222222222224444444444444444222222222222222222222244444444444444444444442222222222222222222222222222222222222222222222
        2222222222222224444444444444222222222222222444444444444444444444444444444444444444444444444422222222222222222222444444444444222222222222222222222222222222222222
        2222222244444444444422222222222444444444444444444444444444444444444444444444444444444444444444444444444422244444222222222244444422222222222222222222222222222222
        2222244444444442222222222444444444444444444444444444444444444444444444444444444444444444444444444444444444224444444444444422444444444442222222222222222222222222
        2224444444442222224444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444244444444444444444222222222222222222
        2444444442222244444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444222222222222224444444444
        4444444222244444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422444444444444442222244444
        4444222444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444422444
        4442244444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441444444444444444224
        4424444444444444444444444444444444444444444444444444414444444444444444444444441444444444444444444444444444444444444444444444444444444444444444444444444444444442
        4244444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444444444444444444444444444
        4444444444444444444444444414444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444144444444444334444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444333444444444333444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444441333444444444333444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444433333334444443333344444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444433333333344444444444444444444444444433333334444443333344444444444444444444444444444444444444444433333333334444444444444
        4444444444444444444444444444444444444444433333333344444444444444444444444444433333334444443333344444444444444444444444444444444444444444433333333334444444444444
        4444444444444444444333444444444444444444431133333344444444444444444444444444431133334444433333334444444444444444444433444444444444444444433131333334444444444444
        4444444444444444443333344444444444444444433333331344444444444444444444444444433333334444433333334444444444444444444333344444444444444444433333311334444444444444
        4444444444444444433333344444444444444444433333333344444444443444444443333344431333334444433333334444444444444444433333344444444444444444433333333334444444444444
        4444444444444444433313444444344444444444433333333344444444433444444443333344433333334444433333334444444444444444433313444444334444444444433331333334444444433444
        4444444444444444433333344444344444444444433333331344444444433444444443333344433333334444433333334444444444444444433333344444334444444444433333331334444444433444
        4444444433344444433113444443334444444444433333333344333333433444444443333344433333334444433333334444444443344444433313444443334444444444433333333334333333333444
        3433444433333333333133344433333444444444433333331344311333433444444444331334433333334443333333333433444433333333333331344443333444444444433333311334311333333444
        3333444443133133333333344433333444444444433333333344333313433444444443333334433133334443333333333333444433133313333333344443333444444444433333333334333313333444
        3313444443331111333333344433333444444444433333333344333313333444444443333334433333334443333333333313444433331311333333344443333444444444433333333334333313333444
        3333444433333333333333334433333344334334333333333334311333333444444443333334433333334443333333333333444433333333333333334433333344434433333333333334311333333444
        3313444433333333333333334433333344333333333333333334333333333443443443333334433333334443333333333313444433333333333333334433333344433333333333333334333333333444
        3333343313133333333333334433333334333311333333333333311cc333333343334433133443333333444333333333333333433313333333333333443333333444311333333c333333311ccc333433
        3333343333333333333333333313333334333333333ccc333333333ccc3333334333433333344333333344433333333333333343333333333333333333333333343333333333cc333333333ccc333433
        3333343333333333333333333333333334333333333ccc333333333ccc3333333333333333333333333344433333333333333343333333333333333333333333343333333333cc333333333ccc333333
        33333433333333333333333333333333343333333ccccccc333333ccccc3333333333333333333333333334333333333333333433333333333333333333333333431333333ccccccc33333ccccc33333
        33333ccccccccc333333333333333333343333333ccccccc333333ccccc333333333333333333333333333433333333333333cccccccccc333333333333333333433333333ccccccc33333ccccc33333
        33333ccccccccc333333333333333333343333333ccccccc333333ccccc333333333333333333333333333433333333333333cccccccccc333333333333333333433333333ccccccc33333ccccc33333
        33333cddcccccc333333333333333333343333333cddcccc33333ccccccc33111333333333333333cc3333433333333333333ccdcdccccc333333333333333333433333333ccccccc3333cccccccc113
        33333cccccccdc333333333333333333343333333ccccccc33333ccccccc3331133333333333333cccc333433333333333333ccccccddcc333333333333333333433333333ccccccc3333cccccccc333
        33333ccccccccc3333333333c33333333ccccc333cdccccc33333ccccccc33333333333133333cccccc333433333333333333cccccccccc3333333333333333333cccc3333cccdccc3333cccccccc333
        33333ccccccccc333333333cc33333333ccccc333ccccccc33333ccccccc33133333333333333cccdc333333cc33333333333ccccdccccc33333333cc333333333cccc3333cccdccc3333cccccccc313
        33333cccccccdc333333333cc33333333ccccc333ccccccc33333ccccccc33111333333333333cccccc33333cc33333333333cccccccdcc33333333cc33333333cccccc333ccccccc3333cccccccc113
        33333ccccccccc33cccccc3cc33333333ccccc333ccccccc33333ccccccc333333333cc133333cccdc33333ccc33333333333cccccccccc3ccccccccc33333333cccccc333cccdccc3333cccccccc333
        33333cccccccdc33cddccc3cc333333333ccdcc33ccccccc333cccccccccc3cc3333cccccccccccccdc3333cccc3333333333ccccccddcc3cddcccccc33333333ccccccc33ccccccc33ccccccccccccc
        33333ccccccccc33ccccdc3cc33333333cccccc33ccdcccc333ccccccccccccc3333ccdcccdcccccccc3333cccc3333333333cccccccccc3ccccdcccc33333333ccccccc33ccccdcc33ccccccccccccc
        33333ccccccccc33ccccdcccc33333333cccccc33ccccccc333cccccccccccdc3333ccccdcddccccccc3333cccc3333333333cccccccccc3ccccdcccc33333333ccccccc33ccccccc33ccccccccccccc
        3cc3ccccccccccc3cddcccccc33333333cccccc33ccccccc333ccccccccccccc3333cccccccccccccccc33cccccc333c33ccccccccccccc3cddcccccc33333333ccccccc33ccccccc33ccccccccccccc
        ccccccccccccccc3ccccccccc33c33c33cccccc33ccccccc333cccccccccccdc3333cccccccccccccccc33cccccc333cccccccccccccccc3ccccccccc33333c33ccccccc33ccccccc33ccccccccccccc
        ccddcccccccccccccddddccccccc3ccc33ccdcc33ccccccc333ccccccccccccccc3cccdccccccccccccc33ccccccc333cddccccccccccccccddcdcccc3cc3ccc3ccccccc33ccccccc33ccccccccccccc
        cccccccccccccccccccccccccccc3ccc3cccccc33ccccccc333ccccccccccccccc3cccccccccccccccccccccccccc3ccccccccccccccccccccccccccc3cc3ccccccccccc33ccccdcc33ccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccc333ccccccccccccccc3cccccccccccccccccccccccccc3ccccccccccccccccccccccccccccccccccccccccccccccccccc33ccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccc3cccccccccccccccccccccccccc3cdcccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccc3cccccccccccccccccccccccccc3ccccccccccccccccccccccccccccccccdccccccccccccccccccc3ccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccc3cccccccccccccccccccccccccc3cccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccc
        ccccccccccccccccccccccccccdddccccccccccccccccccccc3ccccccccccccccc3cccccccccccccccccccccccccc3cccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccddccccccccccccccccccccc3ccccccccccccccc3cccccccccccccccccccccccccc3ccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccdcccccccccccccc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccaccccccccccccccccaccccccccccccccccccccccaccccccccccccccccaccccccccccccccccccccccaccccccccccccccccaccccccccccccccccccccccaccccccccccccccccaccccc
        ccccccacccaacccccaaccccacccaccccacaacccaccccccacccaacccccaaccccacccaccccacaacccaccccccacccaacccccaaccccacccaccccacaacccaccccccacccaacccccaaccccacccaccccacaaccca
        ccacccaacaaccacccaacccaacccaacccaccaacaaccacccaacaaccacccaacccaacccaacccaccaacaaccacccaacaaccacccaacccaacccaacccaccaacaaccacccaacaaccacccaacccaacccaacccaccaacaa
        ccaaccaacaaccaacccaacaaccccaacacaacaaaacccaaccaacaaccaacccaacaaccccaacacaacaaaacccaaccaacaaccaacccaacaaccccaacacaacaaaacccaaccaacaaccaacccaacaaccccaacacaacaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        9999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        9999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        99999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        9999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        99999899999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999a
        9999998888889999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999
        999999999999888999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999
        99999999999999888999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999
        999999999999999998888999999999999998888889999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999
        99999999999999999999889999999999999999999889999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999
        9999999999999999999999889999999999999999999888999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999
        999999999999999999999999899999999999999999999899999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999
        99999999999999999999999989999999999999999999998899999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999988999
        9999999999999999999999999899999999999999999999998899999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999989999
        999999888888889999999999999999999999999999999999998888999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999889999
        99999999999999888899999999999999999999999999999999999888888999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999899999
        9999999999999999998888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999998899999
        99999999999999999999998899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999998999999
        9999999999999999999999988999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaa99999999998999999
        999999999999999999999999988999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaa99999999999998999999
        99999999999999999999999999899999999999999999999999999999999999888888899999999999999999999999999999999999999999999999999999999999aaaaaa99999999999999999998999999
        9999999999999999999999999999999999999999999999999999999999999999999988888888888888889999999999999999999999999999999999999999999999999999999999999999999998999999
        9999999999999999999998899999999999999999999999999999999999999999999999999999999999998888889999999999999999999999999999999999999999999999999999999999999998999999
        9999999999999999999999988889999999999999999999999999999999999999999999999999999999999999998888899999999999999999999888999999999999999999999999999999999998999999
        9999999999999999999999999998888888888888888899999999999999999999999999999999999999999999999999988888888888999999999999888888999999999999999999999999999999999999
        9999999999999999999999999999999999999999999988889999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999999999999999999999999
        9999999999999999999999999999999999999999999999998899999999999999999999999999999999999999999999999999999999999999999999999999988888999999999999999999999999999999
        9999999999999999999999999999999999999999999999999889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    textSprite = textsprite.create("HELPLINE HAWAII", 0, 1)
    textSprite.setOutline(1, 15)
    textSprite.setIcon(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . f e e e e e f e e e f . . . 
        . . f e e e e e e e f e f . . . 
        . . f e e e e e f e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f b e e e e e e e e f . . . 
        . . f b e e e e e e e e f . . . 
        . . f b b e e e e e e e f . . . 
        . . . f b b b b e e e f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    textSprite.setPosition(76, 57)
    textSprite2 = textsprite.create("PRESS ANY BUTTON", 0, 1)
    textSprite2.setScale(0.8, ScaleAnchor.Bottom)
    textSprite2.setPosition(76, 76)
    textSprite2.setOutline(1, 15)
}
function playersetup () {
    playerspawned = 0
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`level1`)
    Mouse.Setsensibility(1.33334)
    coconutgrabber = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f e e e e e e e e e e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(coconutgrabber, tiles.getTileLocation(7, 49))
    coconutgrabber.setStayInScreen(true)
    coconutman = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . f e e e e e f e e e f . . . 
        . . f e e e e e e e f e f . . . 
        . f f e e e e e f e e e f f . . 
        . f f e e e e e e e e e f f . . 
        . f f b e e e e e e e e f f . . 
        . f f b e e e e e e e e f f . . 
        . f f b b e e e e e e e f f . . 
        . f . f b b b b e e e f . f . . 
        . f . . f f f f f f f . . f . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `, SpriteKind.npc)
    tiles.placeOnTile(coconutman, tiles.getTileLocation(5, 46))
    scene.cameraFollowSprite(coconutgrabber)
    controller.moveSprite(coconutgrabber, 100, 100)
    game.showLongText("coconut grabber man you have awaken", DialogLayout.Top)
}
let coconutman: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let playerspawned = 0
let cocoshoot: Sprite = null
let coconutgrabber: Sprite = null
let intro = false
let cococount = 0
let holding = false
intro2()
let mouseanimationcycle = 0
forever(function () {
    if (intro == true) {
        if (controller.A.isPressed() || (controller.right.isPressed() || (controller.down.isPressed() || controller.B.isPressed()) || (controller.up.isPressed() || controller.left.isPressed()))) {
            sprites.destroy(textSprite)
            sprites.destroy(textSprite2)
            intro = false
            playersetup()
        }
    }
})
forever(function () {
    if (playerspawned == 0) {
        if (mouseanimationcycle == 0) {
            mouseanimationcycle = 1
            timer.after(500, function () {
                Mouse.DrawMouse(
                true,
                img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . f f f . . . f f f . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    `,
                0,
                0
                )
            })
            timer.after(1000, function () {
                Mouse.DrawMouse(
                true,
                img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . f f f . . . . . . . f f f . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . f . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    `,
                0,
                0
                )
                mouseanimationcycle = 0
            })
        }
    }
})
