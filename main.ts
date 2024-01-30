
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.player2.isPressed(ControllerButton.B)) {
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(location.column, location.row + 1))
        the_call(game.ask("Pick up phone?"), randint(1, 3))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.droppeditem, function (sprite, otherSprite) {
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (itemheld == true) {
        itemheld = false
        projectile = sprites.createProjectileFromSprite(helditemsprite, rotationalsprite, 50, 50)
        spriteutils.setVelocityAtAngle(projectile, spriteutils.angleFrom(rotationalsprite, Mouse.mouseSprite()), 300)
    } else {
    	
    }
})
function spriterotate () {
    angle = spriteutils.angleFrom(rotationalsprite, Mouse.mouseSprite())
    angle = spriteutils.radiansToDegrees(angle)
    rotationalsprite.setImage(scaling.rot(originalimage.clone(), angle))
}
function MapSelect () {
    if (map_size == 3) {
        tiles.setCurrentTilemap(tilemap`HULUALOA`)
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(61, 99))
    } else if (map_size == 2) {
    	
    } else if (map_size == 1) {
    	
    }
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

function intro_cutscene () {
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
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
function playersetup () {
    playerspawned = 0
    angle = 0
    originalimage = assets.image`myImage`
    itemheld = false
    rotationalsprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    rotationalsprite.setStayInScreen(true)
    controller.moveSprite(rotationalsprite, 150, 150)
    info.setLife(6)
    crowbar = sprites.create(assets.image`crowbar`, SpriteKind.droppeditem)
    bat = sprites.create(assets.image`enemy gun`, SpriteKind.droppeditem)
    scene.cameraFollowSprite(rotationalsprite)
    scene.setBackgroundImage(assets.image`a`)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`starting area`)
    tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(15, 30))
    tiles.placeOnTile(bat, tiles.getTileLocation(21, 9))
    tiles.placeOnTile(crowbar, tiles.getTileLocation(21, 11))
}
let mouseanimationcycle = 0
let bat: Sprite = null
let crowbar: Sprite = null
let message_roll = 0
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let projectile: Sprite = null
let helditemsprite: Image = null
let itemheld = false
let playerspawned = 0
let start_screen = false
let rotationalsprite: Sprite = null
let map_size = 0
let normal_hp = false
let INSIDEORNOT = false
let originalimage: Image = null
let angle = 0
start_screen2()
INSIDEORNOT = true
normal_hp = true
map_size = 0
MapSelect()
forever(function () {
    if (start_screen == true) {
        if (controller.A.isPressed() || (controller.right.isPressed() || (controller.down.isPressed() || controller.B.isPressed()) || (controller.up.isPressed() || controller.left.isPressed()))) {
            sprites.destroy(textSprite)
            sprites.destroy(textSprite2)
            start_screen = false
            intro_cutscene()
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
                Mouse.mouseSprite().setImage(assets.image`mousesmall`)
            })
            timer.after(1000, function () {
                Mouse.mouseSprite().setImage(assets.image`mouselarge`)
                mouseanimationcycle = 0
            })
        }
    }
})


namespace SpriteKind {
    export const droppeditem = SpriteKind.create()
    export const Archer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.player2.isPressed(ControllerButton.B)) {
        tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(location.column, location.row + 1))
        tiles.setTileAt(location, assets.tile`answered phone`)
        the_call(game.ask("Pick up phone?"), randint(1, 3))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.droppeditem, function (sprite, otherSprite) {
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (itemheld == true) {
        itemheld = false
        projectile = sprites.createProjectileFromSprite(helditemsprite, rotationalsprite, 50, 50)
        spriteutils.setVelocityAtAngle(projectile, spriteutils.angleFrom(rotationalsprite, Mouse.mouseSprite()), 300)
    } else {

    }
})


function the_call(_1hpmode: boolean, messageroll: number) {
    controller.moveSprite(rotationalsprite, 0, 0)
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
        controller.moveSprite(rotationalsprite, 150, 150)
        console.log("cutscene ended ")
        story.cancelCurrentCutscene()
        if (INSIDEORNOT == false) {
            tiles.setCurrentTilemap(tilemap`level1`)
            tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(7, 47))
            enemyspawnblocklist = tiles.getTilesByType(sprites.dungeon.collectibleInsignia)
            enemyspawnblockamount = enemyspawnblocklist.length
            for (let index = 0; index < enemyspawnblockamount; index++) {
                spawn_enemy()
            }
        }
    })
}

function spawn_enemy() {
    enemychance = randint(1, 3)
    if (enemychance == 1 || enemychance == 2) {
        Toba_Knight = sprites.create(assets.image`toba enemy`, SpriteKind.Enemy)
        characterAnimations.setCharacterAnimationsEnabled(Toba_Knight, false)
        tiles.placeOnTile(Toba_Knight, enemyspawnblocklist.pop())
    }
    if (enemychance == 3) {
        Toba_Archer = sprites.create(assets.image`toba enemy`, SpriteKind.Archer)
        characterAnimations.setCharacterAnimationsEnabled(Toba_Archer, false)
        tiles.placeOnTile(Toba_Archer, enemyspawnblocklist.pop())
    }
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})

let enemyswing = 0
let Toba_Archer: Sprite = null
let Toba_Knight: Sprite = null
let enemychance = 0
let enemyspawnblockamount = 0
let enemyspawnblocklist: tiles.Location[] = []
start_screen2()
forever(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (enemyswing == 1) {
            characterAnimations.loopFrames(
                value2,
                assets.animation`Toba Knight FR Attack`,
                70,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
                value2,
                assets.animation`Toba Knight FL Attack`,
                70,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
            )
            timer.after(400, function () {
                enemyswing = 0
            })
        } else {
            characterAnimations.loopFrames(
                value2,
                assets.animation`Toba Knight FR Idle`,
                200,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
                value2,
                assets.animation`Toba Knight FL Idle`,
                200,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                value2,
                assets.animation`Toba Knight FR Walk`,
                70,
                characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
                value2,
                assets.animation`Toba Knight FL Walk`,
                70,
                characterAnimations.rule(Predicate.MovingLeft)
            )
        }
    }
})
forever(function () {
    for (let value3 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (rotationalsprite.x > value3.x - 50 && rotationalsprite.x < value3.x + 50 && (rotationalsprite.y > value3.y - 50 && rotationalsprite.y < value3.y + 50)) {
            value3.follow(rotationalsprite, 80)
        } else {
            value3.follow(rotationalsprite, 0)
        }
    }
})
forever(function () {
    for (let value32 of sprites.allOfKind(SpriteKind.Archer)) {
        if (rotationalsprite.x > value32.x - 50 && rotationalsprite.x < value32.x + 50 && (rotationalsprite.y > value32.y - 50 && rotationalsprite.y < value32.y + 50)) {
            value32.follow(rotationalsprite, 20)
        } else {
            value32.follow(rotationalsprite, 0)
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
    if (start_screen == false && playerspawned == 0) {
        spriterotate()
    }
})
forever(function () {
    if (playerspawned == 0) {
        if (mouseanimationcycle == 0) {
            mouseanimationcycle = 1
            timer.after(500, function () {
                Mouse.mouseSprite().setImage(assets.image`mousesmall`)
            })
            timer.after(1000, function () {
                Mouse.mouseSprite().setImage(assets.image`mouselarge`)
                mouseanimationcycle = 0
            })
        }
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Archer)) {
        characterAnimations.loopFrames(
            value,
            assets.animation`Toba Archer FR Idle`,
            200,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            value,
            assets.animation`Toba Archer FL Idle`,
            200,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            value,
            assets.animation`Toba Archer FR Walk`,
            70,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            value,
            assets.animation`Toba Archer FL Walk`,
            70,
            characterAnimations.rule(Predicate.MovingLeft)
        )
    }
})
