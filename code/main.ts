// simple rpg style walk and talk
import kaboom from "kaboom";

kaboom({
  background: [87, 86, 86],
  //spriteUrl: "./sprites/darkdungeon",
})
loadSound("ripandtear", "sounds/ripandtear.mp3");
const backgroundMusic = play("ripandtear", {
  loop: true, // Set loop to true for continuous playback
  volume: 0.5, // Adjust the volume as needed (0 to 1)
});
/*
// Load the background image
const backgroundImage = loadSprite("background", "/sprites/darkdungeon.png", {
  width: width(),  // Set the width to the width of the canvas
  height: height(), // Set the height to the height of the canvas
});

// Draw the background image using quad
const bgQuad = quad({
  texture: backgroundImage,
  width: width(),
  height: height(),
  pos: vec2(width() / 2, height() / 2), // Center the image on the canvas
});

// Draw the background image
drawSprite(backgroundImage, {
  sprite: "darkdungeon",
  width: width(),
  height: height(),
  pos: vec2(width() / 2, height() / 2), // Center the image on the canvas
});
*/
/*
let bgImage = loadSprite("background", "/sprites/darkdungeon.png");

let background = add([
  sprite("background"),
  // Make the background centered on the screen
  pos(width() / 2, height() / 2),
  //origin("center"),
  // Allow the background to be scaled
  scale(1),
  // Keep the background position fixed even when the camera moves
  fixed()
]);
// Scale the background to cover the screen
background.scaleTo(Math.max(
  200,//width() / bgImage.tex.width,
  200//height() / bgImage.tex.height
));
*/

loadSprite("bag", "sprites/bag.png", {
  width: 10,
  height: 10,
});

loadSprite("ghosty", "sprites/ghosty.png", {
  width: 10,
  height: 10,
});

loadSprite("grass", "sprites/grass.png", {
  width: 20,
  height: 20
});

loadSprite("steel", "sprites/steel.png", {
  width: 20,
  height: 20
});

loadSprite("door", "sprites/door.png", {
  width: 7,
  height: 7
});

loadSprite("key", "sprites/key.png", {
  width: 5,
  height: 5
});

loadSprite("bean", "sprites/bean.png", {
  width: 2,
  height: 2
});
loadSound("music", "sounds/ripandtear.mp3").then((music) =>{
   music.play({loop:true});
});

//Enemy --begin
loadSprite("enemy", "sprites/enemy.png", {
  width: 10,
  height: 10,
});
//Enemy --end

scene("main", (levelIdx) => {
  const SPEED = 500
  const ENEMY_SPEED = 160
  const BULLET_SPEED = 800 //FIXME
  // character dialog data
  const characters = {
    "a": {
      sprite: "bag",
      msg: "yo pablo we shouldnt have went in that van man",
    },
    "b": {
      sprite: "ghosty",
      msg: "*ded*",
    },
  }
  // level layouts
  const levels = [
    [
      "== | =========",
      "=       =e=  =",
      "= $      =   =",
      "=    a       =",
      "=            =",
      "=   @        =",
      "============",
    ],
    [
      "--------",
      "- e    -",
      "-   $  -",
      "|      -",
      "-    b -",
      "-  @   -",
      "--------",
    ],
    [
      "---------------",
      "-e             -",
      "-          $   -",
      "-         -----",
      "|      -",
      "-      -",
      "-  @   -",
      "--------",
    ],
    [
      "------------------ $",
      "------------------    -",
      "------------------    -",
      "------------------    -       ",
      "-          e                 -",
      "-                           -",
      "-         --------------------",
      "|      -",
      "-  @   -",
      "-     -",
      "--------",
    ],
    [
      "==========|===========",
      "-@    e       $        -",
      "-                  a   -",
      "                       -",
      "=====================  -",
    ],
    [
      "                      --------",
      "                      =       ",
      "==========|===========   e   -",
      "-@                           -",
      "-                           -",
      "                             -",
      "=====================        -",
      "                        $     -",
    ],
    [
      "      ",
      "      ",
      "      ",
      "  ====",
      "  ====",
      "  ====",
      "  ==|==",
      "===   ===",
      "=== $ ===",
      "     @       =",
      "             =e",
      "              =",
    ],
    [
      "        --|---          ",
      "      -      -         ",
      "     -    $    -       ",
      "   -            -      ",
      "  -  e      @   -      ",
      " -----------------     ",
    ],
  ]
  const level = addLevel(levels[levelIdx], {
    tileWidth: 64,
    tileHeight: 64,
    //pos: vec2(width()/4, height()/4),
    pos: vec2(0, 0),
    tiles: {
      "=": () => [
        sprite("grass"),
        area(),
        body({ isStatic: true }),
        anchor("center"),
      ],
      "-": () => [
        sprite("steel"),
        area(),
        body({ isStatic: true }),
        anchor("center"),
      ],
      "$": () => [
        sprite("key"),
        area(),
        anchor("center"),
        "key",
      ],
      "@": () => [
        sprite("bean"),
        area(),
        body(),
        anchor("center"),
        "player",
        ////pos(width()/8, height()/8),
      ],
      "e": () => [
        sprite("enemy"),
        area(),
        body(),
        anchor("center"),
        "enemy",
        ////pos(width()/8, height()/8),
        // This enemy cycle between 3 states, and start from "idle" state
        state("move", [ "idle", "attack", "move" ]),
      ],
      "|": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        anchor("center"),
        "door",
      ],
    },
    // any() is a special function that gets called everytime there's a
    // symbole not defined above and is supposed to return what that symbol
    // means
    wildcardTile(ch) {
      const char = characters[ch]
      if (char) {
        return [
          sprite(char.sprite),
          area(),
          body({ isStatic: true }),
          anchor("center"),
          "character",
          { msg: char.msg },
        ]
      }
    },
  })

  // get the player game obj by tag
  const player = level.get("player")[0]
  
  //Enemy --begin
  /*
  const enemy = add([
    sprite("enemy"),
    pos(width() - 80, height() - 80),
    anchor("center"),
    // This enemy cycle between 3 states, and start from "idle" state
    state("move", [ "idle", "attack", "move" ]),
  ])
  */
  const enemy = level.get("enemy")[0]
  // Run the callback once every time we enter "idle" state.
  // Here we stay "idle" for 0.5 second, then enter "attack" state.
  enemy.onStateEnter("idle", async () => {
    await wait(0.5)
    enemy.enterState("attack")
  })

  // When we enter "attack" state, we fire a bullet, and enter "move" state after 1 sec
  enemy.onStateEnter("attack", async () => {

    // Don't do anything if player doesn't exist anymore
    if (player.exists()) {

      const dir = player.pos.sub(enemy.pos).unit()

      add([
        pos(enemy.pos),
        move(dir, BULLET_SPEED),
        rect(12, 12),
        area(),
        offscreen({ destroy: true }),
        anchor("center"),
        color(BLUE),
        "bullet",
      ])

    }

    await wait(1)
    enemy.enterState("move")

  })

  enemy.onStateEnter("move", async () => {
    await wait(2)
    enemy.enterState("idle")
  })

  // Like .onUpdate() which runs every frame, but only runs when the current state is "move"
  // Here we move towards the player every frame if the current state is "move"
  enemy.onStateUpdate("move", () => {
    if (!player.exists()) return
    const dir = player.pos.sub(enemy.pos).unit()
    enemy.move(dir.scale(ENEMY_SPEED))
  })

  // Taking a bullet makes us disappear
  player.onCollide("bullet", (bullet) => {
    destroy(bullet)
    destroy(player)
    addKaboom(bullet.pos)
  })
  //Enemy --end
  
  const effects = {
    crt: () => ({
      "u_flatness": 3,
    }),
    vhs: () => ({
      "u_intensity": 12,
    }),
  }

  for (const effect in effects) {
    //loadShaderURL(effect, null, `https://kaboomjs.com/play/postEffect/example/shaders/${effect}.frag`)
  }

  let curEffect = 0
  
  function addDialog() {
    const h = 160
    const pad = 16
    const bg = add([
      pos(0, height() - h),
      rect(width(), h),
      color(0, 0, 0),
      z(100),
    ])
    const txt = add([
      text("", {
        width: width(),
      }),
      pos(0 + pad, height() - h + pad),
      z(100),
    ])
    bg.hidden = true
    txt.hidden = true
    return {
      say(t) {
        txt.text = t
        bg.hidden = false
        txt.hidden = false
      },
      dismiss() {
        if (!this.active()) {
          return
        }
        txt.text = ""
        bg.hidden = true
        txt.hidden = true
      },
      active() {
        return !bg.hidden
      },
      destroy() {
        bg.destroy()
        txt.destroy()
      },
    }
  }

  let hasKey = false
  const dialog = addDialog()

  player.onCollide("key", (key) => {
    destroy(key)
    hasKey = true
  })

  player.onCollide("door", () => {
    if (hasKey) {
      if (levelIdx + 1 < levels.length) {
        go("main", levelIdx + 1)
      } else {
        go("win")
      }
    } else {
      dialog.say("get a key man")
    }
  })

  // talk on touch
  player.onCollide("character", (ch) => {
    dialog.say(ch.msg)
  })
/*
  const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN,
  }
*/

/*
  for (const dir in dirs) {
    onKeyPress(dir, () => {
      dialog.dismiss()
    })
    onKeyDown(dir, () => {
      player.move(dirs[dir].scale(SPEED))
    })
  }
*/ 
  onKeyDown("a", () => {
    player.move(-SPEED, 0)
  })

  onKeyDown("d", () => {
    player.move(SPEED, 0)
  })

  onKeyDown("w", () => {
    player.move(0, -SPEED)
  })

  onKeyDown("s", () => {
    player.move(0, SPEED)
  })
  /*
  onKeyPress("q", () => {
    const list = Object.keys(effects)
    curEffect = curEffect === 0 ? list.length - 1 : curEffect - 1
    label.text = list[curEffect]
  })
  */
})

scene("win", () => {
  add([
    text("You Escaped the Basement!"),
    pos(width() / 2, height() / 2),
    anchor("center"),
  ])
})

go("main", 0)
