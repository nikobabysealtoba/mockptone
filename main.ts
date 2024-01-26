namespace SpriteKind {
    export const droppeditem = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.player2.isPressed(ControllerButton.B)) {
        story.startCutscene(function () {
            story.printCharacterText("", "PHONE")
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.droppeditem, function (sprite, otherSprite) {
    if (intro == false && playerspawned == 0 && controller.B.isPressed()) {
        timer.after(0, function () {
            if (intro == false && playerspawned == 0 && controller.B.isPressed()) {
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
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
function intro2 () {
    intro = true
    playerspawned = 1
    scene.setBackgroundImage(assets.image`background`)
    Mouse.DrawMouse(
    true,
    assets.image`secondmousesmall`,
    0,
    0
    )
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
    textSprite = textsprite.create("HELPLINE HAWAII", 0, 1)
    textSprite.setOutline(1, 15)
    textSprite.setIcon(assets.image`titlegun`)
    textSprite.setPosition(76, 57)
    textSprite2 = textsprite.create("PRESS ANY BUTTON", 0, 1)
    textSprite2.setScale(0.8, ScaleAnchor.Bottom)
    textSprite2.setPosition(76, 76)
    textSprite2.setOutline(1, 15)
}
function playersetup () {
    playerspawned = 0
    angle = 0
    originalimage = assets.image`myImage`
    itemheld = false
    rotationalsprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    rotationalsprite.setStayInScreen(true)
    controller.moveSprite(rotationalsprite)
    crowbar = sprites.create(assets.image`crowbar`, SpriteKind.droppeditem)
    bat = sprites.create(assets.image`enemy gun`, SpriteKind.droppeditem)
    scene.cameraFollowSprite(rotationalsprite)
    scene.setBackgroundImage(assets.image`a`)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`starting area`)
    tiles.placeOnTile(rotationalsprite, tiles.getTileLocation(15, 30))
    tiles.placeOnTile(bat, tiles.getTileLocation(21, 9))
    tiles.placeOnTile(crowbar, tiles.getTileLocation(21, 11))
    Mouse.Setsensibility(1.33334)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    let testenemy: Sprite = null
    sprites.destroy(projectile)
    testenemy.setImage(assets.image`dumb smile`)
    testenemy.follow(rotationalsprite, 0)
})
let mouseanimationcycle = 0
let bat: Sprite = null
let crowbar: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let rotationalsprite: Sprite = null
let projectile: Sprite = null
let helditemsprite: Image = null
let itemheld = false
let playerspawned = 0
let intro = false
let angle = 0
let originalimage: Image = null
intro2()
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
    if (intro == false && playerspawned == 0) {
        spriterotate()
    }
})
