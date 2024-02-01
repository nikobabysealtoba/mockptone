namespace SpriteKind {
    export const droppeditem = SpriteKind.create()
    export const SGunner = SpriteKind.create()
    export const enemyidle = SpriteKind.create()
    export const bullet = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const Killa = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.player2, SpriteKind.bullet, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    legs,
    assets.animation`Leg Walk Up`,
    70,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
scene.onOverlapTile(SpriteKind.player2, assets.tile`myTile0`, function (sprite, location) {
    if (controller.player2.isPressed(ControllerButton.B)) {
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(location.column, location.row + 1))
        tiles.setTileAt(location, assets.tile`myTile3`)
        the_call(game.ask("Pick up phone?"), randint(1, 3))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (itemheld == true) {
        itemheld = false
        projectile = sprites.createProjectileFromSprite(helditemsprite, rotationalsprite, 50, 50)
        spriteutils.setVelocityAtAngle(projectile, spriteutils.angleFrom(rotationalsprite, Mouse.mouseSprite()), 300)
    }
})
function spriterotate () {
    angle = spriteutils.angleFrom(rotationalsprite, Mouse.mouseSprite())
    angle = spriteutils.radiansToDegrees(angle)
    rotationalsprite.setImage(scaling.rot(originalimage.clone(), angle))
}
function start_screen2 () {
    start_screen = true
    playerspawned = 1
    scene.setBackgroundImage(assets.image`background`)
    textSprite = textsprite.create("HELPLINE HAWAII", 0, 1)
    textSprite.setOutline(1, 15)
    textSprite.setIcon(assets.image`titlegun`)
    textSprite.setPosition(76, 57)
    textSprite2 = textsprite.create("PRESS ANY BUTTON", 0, 1)
    textSprite2.setScale(0.8, ScaleAnchor.Bottom)
    textSprite2.setPosition(76, 76)
    textSprite2.setOutline(1, 15)
    Mouse.DrawMouse(
    true,
    assets.image`secondmousesmall`,
    0,
    0
    )
    Mouse.Setsensibility(1.33334)
    Keybinds.setSimulatorKeymap(
    Keybinds.PlayerNumber.ONE,
    Keybinds.CustomKey.W,
    Keybinds.CustomKey.S,
    Keybinds.CustomKey.A,
    Keybinds.CustomKey.D,
    Keybinds.CustomKey.LEFT_CLICK,
    Keybinds.CustomKey.RIGHT_CLICK
    )
    Keybinds.setSimulatorKeymap(
    Keybinds.PlayerNumber.TWO,
    Keybinds.CustomKey.UP,
    Keybinds.CustomKey.DOWN,
    Keybinds.CustomKey.LEFT,
    Keybinds.CustomKey.RIGHT,
    Keybinds.CustomKey.Q,
    Keybinds.CustomKey.E
    )
}
sprites.onOverlap(SpriteKind.player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    let attacking = 0
    if (attacking == 1) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite)
    } else {
        otherSprite.follow(rotationalsprite, 0)
        enemyswing = 0
        info.changeLifeBy(-1)
        otherSprite.setKind(SpriteKind.enemyidle)
        timer.after(400, function () {
            otherSprite.setKind(SpriteKind.Enemy)
        })
        if (info.life() <= 0) {
            game.gameOver(false)
        }
    }
})
sprites.onDestroyed(SpriteKind.SGunner, function (sprite) {
    droppeditemlist = [
    assets.image`titlegun`,
    assets.image`enemy gun`,
    assets.image`crowbar`,
    assets.image`knife`,
    assets.image`sword`
    ]
    droppeditemsprite = sprites.create(droppeditemlist[randint(0, droppeditemlist.length - 1)], SpriteKind.droppeditem)
    tiles.placeOnTile(droppeditemsprite, sprite.tilemapLocation())
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Killa, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.bullet, function (sprite, location) {
    sprites.destroy(sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    legs,
    assets.animation`Leg Walk Left`,
    70,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
function the_call (_1hpmode: boolean, messageroll: number) {
    controller.moveSprite(legs, 0, 0)
    story.startCutscene(function () {
        if (_1hpmode == true) {
            info.setLife(5)
            story.printCharacterText("The phone starts blaring. ", "conscience")
        } else {
            info.setLife(1)
            story.printCharacterText("The phone starts blaring anyway, your heart feels heavy.", "conscience")
        }
        console.log("cutscene started")
        story.printCharacterText("You have one new message!", "PHONE")
        if (messageroll == 1) {
            story.printCharacterText("Hi! This is 'Dunvan' from O'Donald's Auto Parts.", "PHONE")
            story.printCharacterText("We have an order ready for you.", "PHONE")
            story.printCharacterText("What city would you like this picked up at?", "PHONE")
            story.showPlayerChoices("HONOLULU.", "HILO.", "HULUALOA.", "SURPRISE ME.")
            if (story.getLastAnswer() == "HONOLULU.") {
                map_size = 1
            } else if (story.getLastAnswer() == "HILO.") {
                map_size = 2
            } else if (story.getLastAnswer() == "HULUALOA.") {
                map_size = 3
            } else if (story.getLastAnswer() == "SURPRISE ME.") {
                map_size = randint(1, 3)
            }
            story.printCharacterText("Would you like to collect your package outside?", "PHONE")
            story.showPlayerChoices("NO.", "YES.")
            INSIDEORNOT = story.checkLastAnswer("NO.")
            story.printCharacterText("Perfect, we're already there waiting for you at 104th street. Remember, be discreet!", "PHONE")
        } else if (messageroll == 2) {
            story.printCharacterText("Hey! It's FloorCheck from the orphanage, we need a babysitter around here.", "PHONE")
            story.printCharacterText("We have a lot of ruffians needing some discipline, they say they'll let me pay you as if you were an employee. ", "PHONE")
            story.printCharacterText("How close are you from here? Better yet, just tell me your city.", "PHONE")
            story.showPlayerChoices("HONOLULU.", "HILO.", "HULUALOA.", "I CAN BE ANYWHERE.")
            if (story.getLastAnswer() == "HONOLULU.") {
                map_size = 1
            } else if (story.getLastAnswer() == "HILO.") {
                map_size = 2
            } else if (story.getLastAnswer() == "HULUALOA.") {
                map_size = 3
            } else if (story.getLastAnswer() == "I CAN BE ANYWHERE.") {
                map_size = randint(1, 3)
            }
            story.printCharacterText("I see, do you wanna deal with the ones outside?", "PHONE")
            story.showPlayerChoices("NOT REALLY.", "FINE BY ME.")
            INSIDEORNOT = story.checkLastAnswer("NOT REALLY.")
            story.printCharacterText("Alright! We're waiting for you here at 81st street. Please be discreet around the adults.", "PHONE")
        } else if (messageroll == 3) {
            story.printCharacterText("Sup, it's Raool from the club, we need you to be DJ tonight. Two events.", "PHONE")
            story.printCharacterText("You're free to play whatever you want.", "PHONE")
            story.printCharacterText("What city you coming from?", "PHONE")
            story.showPlayerChoices("HONOLULU.", "HILO.", "HULUALOA.", "WHICHEVER ONE YOU NEED ME TO BE.")
            if (story.getLastAnswer() == "HONOLULU.") {
                map_size = 1
            } else if (story.getLastAnswer() == "HILO.") {
                map_size = 2
            } else if (story.getLastAnswer() == "HULUALOA.") {
                map_size = 3
            } else if (story.getLastAnswer() == "WHICHEVER ONE YOU NEED ME TO BE.") {
                map_size = randint(1, 3)
            }
            story.printCharacterText("Cool, we have an indoors rave and a concert out in the fresh air, choose.", "PHONE")
            story.showPlayerChoices("RAVE.", "CONCERT.")
            INSIDEORNOT = story.checkLastAnswer("RAVE.")
            story.printCharacterText("Sick, we're over at 24th street. Be discreet coming in, and dress to kill!", "PHONE")
        }
        controller.moveSprite(legs, 200, 200)
        console.log("cutscene ended ")
        story.cancelCurrentCutscene()
        if (INSIDEORNOT == false) {
            tiles.setCurrentTilemap(tilemap`level1`)
            tiles.placeOnTile(legs, tiles.getTileLocation(7, 47))
            enemyspawnblocklist = tiles.getTilesByType(sprites.swamp.swampTile3)
            enemyspawnblockamount = enemyspawnblocklist.length
            for (let index = 0; index < enemyspawnblockamount; index++) {
                if (randint(1, 5) == 5) {
                    spawn_enemy()
                }
            }
        } else {
            if (map_size == 1) {
                tiles.setCurrentTilemap(tilemap`level2`)
                tiles.placeOnTile(legs, tiles.getTileLocation(61, 99))
                enemyspawnblocklist = tiles.getTilesByType(assets.tile`erm`)
                enemyspawnblockamount = enemyspawnblocklist.length
                for (let index = 0; index < enemyspawnblockamount; index++) {
                    spawn_enemy()
                }
            } else if (map_size == 2) {
                tiles.setCurrentTilemap(tilemap`level0`)
                tiles.placeOnTile(legs, tiles.getTileLocation(40, 99))
                enemyspawnblocklist = tiles.getTilesByType(assets.tile`erm`)
                enemyspawnblockamount = enemyspawnblocklist.length
                for (let index = 0; index < enemyspawnblockamount; index++) {
                    spawn_enemy()
                }
            } else if (map_size == 3) {
                tiles.setCurrentTilemap(tilemap`levelrahhh`)
                tiles.placeOnTile(legs, tiles.getTileLocation(64, 0))
                enemyspawnblocklist = tiles.getTilesByType(assets.tile`erm`)
                enemyspawnblockamount = enemyspawnblocklist.length
                for (let index = 0; index < enemyspawnblockamount; index++) {
                    spawn_enemy()
                }
            }
        }
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.SGunner, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    legs,
    assets.animation`Leg Walk Right`,
    70,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.droppeditem, function (sprite, otherSprite) {
    if (start_screen == false && playerspawned == 0 && controller.B.isPressed()) {
        timer.after(10, function () {
            if (start_screen == false && playerspawned == 0 && controller.B.isPressed()) {
                itemheld = true
                helditemsprite = otherSprite.image
                sprites.destroy(otherSprite)
            }
        })
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    legs,
    assets.animation`Leg Walk Down`,
    70,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
function intro_cutscene () {
    scene.setBackgroundImage(assets.image`aa`)
    story.startCutscene(function () {
        story.printCharacterText("Oh It's you again. Looks like you've been busy since the last time we met.")
        story.printCharacterText("WHY DID YOU COME BACK HERE? YOU'RE NOT A NICE PERSON, ARE YOU? YOU MAKE ME SICK!")
        story.printCharacterText("I see that you remember me now, but you still don't know who I am.")
        story.printCharacterText("I leave you with two questions.")
        story.printCharacterText("Firstly, Who is leaving the messages on your answering machine?")
        story.printCharacterText("Secondly,")
        story.printCharacterText("DO YOU LIKE HURTING OTHER PEOPLE?")
        scene.setBackgroundImage(assets.image`phobetor colors`)
        timer.after(5000, function () {
            story.cancelCurrentCutscene()
            playersetup()
        })
    })
}
scene.onOverlapTile(SpriteKind.player2, assets.tile`meddybeddy`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`basepurpletile`)
    info.changeLifeBy(1)
})
sprites.onDestroyed(SpriteKind.Killa, function (sprite) {
    droppeditemlist = [
    assets.image`titlegun`,
    assets.image`enemy gun`,
    assets.image`crowbar`,
    assets.image`knife`,
    assets.image`sword`
    ]
    droppeditemsprite = sprites.create(droppeditemlist[randint(0, droppeditemlist.length - 1)], SpriteKind.droppeditem)
    tiles.placeOnTile(droppeditemsprite, sprite.tilemapLocation())
})
function spawn_enemy () {
    enemychance = randint(1, 5)
    if (enemychance == 1 || enemychance == 2) {
        Toba_Knight = sprites.create(assets.image`toba enemy`, SpriteKind.Enemy)
        characterAnimations.setCharacterAnimationsEnabled(Toba_Knight, true)
        tiles.placeOnTile(Toba_Knight, enemyspawnblocklist.pop())
    }
    if (enemychance == 3 || enemychance == 4) {
        Toba_SGunner = sprites.create(assets.image`toba enemy`, SpriteKind.SGunner)
        targetlocked = 0
        characterAnimations.setCharacterAnimationsEnabled(Toba_SGunner, true)
        tiles.placeOnTile(Toba_SGunner, enemyspawnblocklist.pop())
    }
    if (enemychance == 5) {
        Toba_Killa = sprites.create(assets.image`toba enemy`, SpriteKind.Killa)
        targetlocked = 0
        characterAnimations.setCharacterAnimationsEnabled(Toba_Killa, true)
        tiles.placeOnTile(Toba_Killa, enemyspawnblocklist.pop())
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bullet, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    droppeditemlist = [
    assets.image`titlegun`,
    assets.image`enemy gun`,
    assets.image`crowbar`,
    assets.image`knife`,
    assets.image`sword`
    ]
    droppeditemsprite = sprites.create(droppeditemlist[randint(0, droppeditemlist.length - 1)], SpriteKind.droppeditem)
    tiles.placeOnTile(droppeditemsprite, sprite.tilemapLocation())
})
function playersetup () {
    playerspawned = 0
    angle = 0
    originalimage = assets.image`Phobetor`
    itemheld = false
    legs = sprites.create(assets.image`legs sprite`, SpriteKind.player2)
    rotationalsprite = sprites.create(assets.image`Phobetor`, SpriteKind.player2)
    controller.moveSprite(legs, 200, 200)
    scene.cameraFollowSprite(rotationalsprite)
    rotationalsprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    rotationalsprite.setPosition(legs.x, legs.y)
    scene.setBackgroundImage(assets.image`a`)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`starting area`)
    tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(15, 30))
    tiles.placeOnTile(legs, tiles.getTileLocation(15, 30))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (map_size == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(61, 99))
        enemyspawnblocklist = tiles.getTilesByType(assets.tile`erm`)
        enemyspawnblockamount = enemyspawnblocklist.length
        for (let index = 0; index < enemyspawnblockamount; index++) {
            spawn_enemy()
        }
    } else if (map_size == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(40, 99))
        enemyspawnblocklist = tiles.getTilesByType(assets.tile`erm`)
        enemyspawnblockamount = enemyspawnblocklist.length
        for (let index = 0; index < enemyspawnblockamount; index++) {
            spawn_enemy()
        }
    } else if (map_size == 3) {
        tiles.setCurrentTilemap(tilemap`levelrahhh`)
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(64, 0))
        enemyspawnblocklist = tiles.getTilesByType(assets.tile`erm`)
        enemyspawnblockamount = enemyspawnblocklist.length
        for (let index = 0; index < enemyspawnblockamount; index++) {
            spawn_enemy()
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let mouseanimationcycle = 0
let bullet2: Dart = null
let Toba_Killa: Sprite = null
let targetlocked = 0
let Toba_SGunner: Sprite = null
let Toba_Knight: Sprite = null
let enemychance = 0
let enemyspawnblockamount = 0
let enemyspawnblocklist: tiles.Location[] = []
let INSIDEORNOT = false
let map_size = 0
let droppeditemsprite: Sprite = null
let droppeditemlist: Image[] = []
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let start_screen = false
let helditemsprite: Image = null
let projectile: Sprite = null
let itemheld = false
let rotationalsprite: Sprite = null
let legs: Sprite = null
let playerspawned = 0
let enemyswing = 0
let angle = 0
let originalimage: Image = null
start_screen2()
enemyswing = 0
playerspawned = 1
game.onUpdate(function () {
    if (playerspawned == 0) {
        rotationalsprite.setPosition(legs.x, legs.y)
    }
})
game.onUpdateInterval(650, function () {
    for (let value4 of sprites.allOfKind(SpriteKind.SGunner)) {
        if (rotationalsprite.x > value4.x - 100 && rotationalsprite.x < value4.x + 100 && (rotationalsprite.y > value4.y - 100 && rotationalsprite.y < value4.y + 100)) {
            targetlocked = 1
            if (targetlocked == 1) {
                value4.follow(rotationalsprite, 0)
                value4.setKind(SpriteKind.enemyidle)
                targetlocked = 0
                bullet2 = darts.create(assets.image`myImage1`, SpriteKind.bullet)
                tiles.placeOnTile(bullet2, value4.tilemapLocation())
                bullet2.pow = 150
                bullet2.angle += spriteutils.radiansToDegrees(spriteutils.angleFrom(value4, rotationalsprite)) * -1 + randint(-10, 10)
                bullet2.throwDart()
                timer.after(400, function () {
                    value4.setKind(SpriteKind.SGunner)
                })
            }
        }
    }
})
forever(function () {
    if (start_screen == true) {
        if (controller.A.isPressed() || (controller.right.isPressed() || (controller.down.isPressed() || controller.B.isPressed()) || (controller.up.isPressed() || controller.left.isPressed()))) {
            sprites.destroy(textSprite)
            sprites.destroy(textSprite2)
            start_screen = false
            playersetup()
        }
    }
})
forever(function () {
    for (let value22 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (enemyswing == 1) {
            characterAnimations.loopFrames(
            value22,
            assets.animation`Toba Knight FR Attack`,
            70,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
            value22,
            assets.animation`Toba Knight FL Attack`,
            70,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
            )
            timer.after(400, function () {
                enemyswing = 0
            })
        } else {
            characterAnimations.loopFrames(
            value22,
            assets.animation`Toba knight FR Idle`,
            70,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
            value22,
            assets.animation`Toba knight FL Idle`,
            200,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
            value22,
            assets.animation`Toba Knight FR Walk`,
            70,
            characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
            value22,
            assets.animation`Toba Knight FL Walk`,
            70,
            characterAnimations.rule(Predicate.MovingLeft)
            )
        }
    }
})
forever(function () {
    for (let value33 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (rotationalsprite.x > value33.x - 60 && rotationalsprite.x < value33.x + 60 && (rotationalsprite.y > value33.y - 60 && rotationalsprite.y < value33.y + 60)) {
            value33.follow(rotationalsprite, 100)
        } else {
            value33.follow(rotationalsprite, 0)
        }
    }
})
forever(function () {
    for (let value34 of sprites.allOfKind(SpriteKind.Killa)) {
        if (rotationalsprite.x > value34.x - 80 && rotationalsprite.x < value34.x + 80 && (rotationalsprite.y > value34.y - 80 && rotationalsprite.y < value34.y + 80)) {
            value34.follow(rotationalsprite, 60)
        } else {
            value34.follow(rotationalsprite, 0)
        }
    }
})
forever(function () {
    if (start_screen == false && playerspawned == 0) {
        spriterotate()
    }
})
forever(function () {
    if (playerspawned == 0) {
        if (mouseanimationcycle == 0) {
            mouseanimationcycle = 1
            timer.after(500, function () {
                Mouse.mouseSprite().setImage(assets.image`secondmousesmall`)
            })
            timer.after(1000, function () {
                Mouse.mouseSprite().setImage(assets.image`mouselarge`)
                mouseanimationcycle = 0
            })
        }
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.SGunner)) {
        characterAnimations.loopFrames(
        value,
        assets.animation`Toba Gunner FR Idle`,
        200,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        value,
        assets.animation`Toba Gunner FL Idle`,
        200,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        value,
        assets.animation`Toba Gunner FR Walk`,
        70,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        value,
        assets.animation`Toba Gunner FL Walk`,
        70,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    }
})
forever(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Killa)) {
        characterAnimations.loopFrames(
        value2,
        assets.animation`Toba Killa FR Idle`,
        200,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        value2,
        assets.animation`Toba Killa FL Idle`,
        200,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        value2,
        assets.animation`Toba Gunner FR Walk0`,
        70,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        value2,
        assets.animation`Toba Gunner FR Walk1`,
        70,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    }
})
forever(function () {
    for (let value32 of sprites.allOfKind(SpriteKind.SGunner)) {
        if (rotationalsprite.x > value32.x - 50 && rotationalsprite.x < value32.x + 50 && (rotationalsprite.y > value32.y - 50 && rotationalsprite.y < value32.y + 50)) {
            value32.follow(rotationalsprite, 80)
        } else {
            value32.follow(rotationalsprite, 0)
        }
    }
})
game.onUpdateInterval(150, function () {
    for (let value3 of sprites.allOfKind(SpriteKind.Killa)) {
        if (rotationalsprite.x > value3.x - 80 && rotationalsprite.x < value3.x + 80 && (rotationalsprite.y > value3.y - 80 && rotationalsprite.y < value3.y + 80)) {
            targetlocked = 1
            if (targetlocked == 1) {
                targetlocked = 0
                bullet2 = darts.create(assets.image`myImage1`, SpriteKind.bullet)
                tiles.placeOnTile(bullet2, value3.tilemapLocation())
                bullet2.pow = 200
                bullet2.angle += spriteutils.radiansToDegrees(spriteutils.angleFrom(value3, rotationalsprite)) * -1 + randint(-20, 20)
                bullet2.throwDart()
            }
        }
    }
})
