"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// simple rpg style walk and talk
var kaboom_mjs_1 = require("https://unpkg.com/kaboom/dist/kaboom.mjs");
(0, kaboom_mjs_1.default)({
    background: [87, 86, 86],
    //spriteUrl: "./sprites/darkdungeon",
});
/*
     //loadSound("ripandtear", "sounds/ripandtear.mp3");
     loadSound("ripandtear", "https://github.com/big-buckets/Escape-Basement/raw/main/sounds/ripandtear.mp3");
     const backgroundMusic = play("ripandtear", {
       loop: true, // Set loop to true for continuous playback
       volume: 0.5, // Adjust the volume as needed (0 to 1)
     });
*/
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
//loadSprite("bag", "/sprites/bag.png", {
loadSprite("bag", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/bag.png", {
    width: 10,
    height: 10,
});
//loadSprite("ghosty", "/sprites/ghosty.png", {
loadSprite("ghosty", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/ghosty.png", {
    width: 10,
    height: 10,
});
//loadSprite("grass", "/sprites/grass.png", {
loadSprite("grass", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/grass.png", {
    width: 20,
    height: 20
});
//loadSprite("steel", "/sprites/steel.png", {
loadSprite("steel", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/steel.png", {
    width: 20,
    height: 20
});
//loadSprite("door", "/sprites/door.png", {
loadSprite("door", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/door.png", {
    width: 7,
    height: 7
});
//loadSprite("key", "/sprites/key.png", {
loadSprite("key", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/key.png", {
    width: 5,
    height: 5
});
//loadSprite("bean", "/sprites/bean.png", {
loadSprite("bean", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/bean.png", {
    width: 2,
    height: 2
});
/*
    //loadSound("music", "/sounds/music.mp3").then((music) =>{
    loadSound("music", "https://github.com/big-buckets/Escape-Basement/raw/main/sounds/ripandtear.mp3").then(music) =>{
       music.play({loop:true});
    });
*/
//Enemy --begin
//loadSprite("enemy", "/sprites/enemy.png", {
loadSprite("enemy", "https://raw.githubusercontent.com/big-buckets/Escape-Basement/main/sprites/enemy.png", {
    width: 10,
    height: 10,
});
//Enemy --end
scene("main", function (levelIdx) {
    var SPEED = 500;
    var ENEMY_SPEED = 160;
    var BULLET_SPEED = 800; //FIXME
    // character dialog data
    var characters = {
        "a": {
            sprite: "bag",
            msg: "yo pablo we shouldnt have went in that van man",
        },
        "b": {
            sprite: "ghosty",
            msg: "*ded*",
        },
    };
    // level layouts
    var levels = [
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
    ];
    var level = addLevel(levels[levelIdx], {
        tileWidth: 64,
        tileHeight: 64,
        //pos: vec2(width()/4, height()/4),
        pos: vec2(0, 0),
        tiles: {
            "=": function () { return [
                sprite("grass"),
                area(),
                body({ isStatic: true }),
                anchor("center"),
            ]; },
            "-": function () { return [
                sprite("steel"),
                area(),
                body({ isStatic: true }),
                anchor("center"),
            ]; },
            "$": function () { return [
                sprite("key"),
                area(),
                anchor("center"),
                "key",
            ]; },
            "@": function () { return [
                sprite("bean"),
                area(),
                body(),
                anchor("center"),
                "player",
                ////pos(width()/8, height()/8),
            ]; },
            "e": function () { return [
                sprite("enemy"),
                area(),
                body(),
                anchor("center"),
                "enemy",
                ////pos(width()/8, height()/8),
                // This enemy cycle between 3 states, and start from "idle" state
                state("move", ["idle", "attack", "move"]),
            ]; },
            "|": function () { return [
                sprite("door"),
                area(),
                body({ isStatic: true }),
                anchor("center"),
                "door",
            ]; },
        },
        // any() is a special function that gets called everytime there's a
        // symbole not defined above and is supposed to return what that symbol
        // means
        wildcardTile: function (ch) {
            var char = characters[ch];
            if (char) {
                return [
                    sprite(char.sprite),
                    area(),
                    body({ isStatic: true }),
                    anchor("center"),
                    "character",
                    { msg: char.msg },
                ];
            }
        },
    });
    // get the player game obj by tag
    var player = level.get("player")[0];
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
    var enemy = level.get("enemy")[0];
    // Run the callback once every time we enter "idle" state.
    // Here we stay "idle" for 0.5 second, then enter "attack" state.
    enemy.onStateEnter("idle", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wait(0.5)];
                case 1:
                    _a.sent();
                    enemy.enterState("attack");
                    return [2 /*return*/];
            }
        });
    }); });
    // When we enter "attack" state, we fire a bullet, and enter "move" state after 1 sec
    enemy.onStateEnter("attack", function () { return __awaiter(void 0, void 0, void 0, function () {
        var dir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Don't do anything if player doesn't exist anymore
                    if (player.exists()) {
                        dir = player.pos.sub(enemy.pos).unit();
                        add([
                            pos(enemy.pos),
                            move(dir, BULLET_SPEED),
                            rect(12, 12),
                            area(),
                            offscreen({ destroy: true }),
                            anchor("center"),
                            color(BLUE),
                            "bullet",
                        ]);
                    }
                    return [4 /*yield*/, wait(1)];
                case 1:
                    _a.sent();
                    enemy.enterState("move");
                    return [2 /*return*/];
            }
        });
    }); });
    enemy.onStateEnter("move", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wait(2)];
                case 1:
                    _a.sent();
                    enemy.enterState("idle");
                    return [2 /*return*/];
            }
        });
    }); });
    // Like .onUpdate() which runs every frame, but only runs when the current state is "move"
    // Here we move towards the player every frame if the current state is "move"
    enemy.onStateUpdate("move", function () {
        if (!player.exists())
            return;
        var dir = player.pos.sub(enemy.pos).unit();
        enemy.move(dir.scale(ENEMY_SPEED));
    });
    // Taking a bullet makes us disappear
    player.onCollide("bullet", function (bullet) {
        destroy(bullet);
        destroy(player);
        addKaboom(bullet.pos);
    });
    //Enemy --end
    var effects = {
        crt: function () { return ({
            "u_flatness": 3,
        }); },
        vhs: function () { return ({
            "u_intensity": 12,
        }); },
    };
    for (var effect in effects) {
        //loadShaderURL(effect, null, `https://kaboomjs.com/play/postEffect/example/shaders/${effect}.frag`)
    }
    var curEffect = 0;
    function addDialog() {
        var h = 160;
        var pad = 16;
        var bg = add([
            pos(0, height() - h),
            rect(width(), h),
            color(0, 0, 0),
            z(100),
        ]);
        var txt = add([
            text("", {
                width: width(),
            }),
            pos(0 + pad, height() - h + pad),
            z(100),
        ]);
        bg.hidden = true;
        txt.hidden = true;
        return {
            say: function (t) {
                txt.text = t;
                bg.hidden = false;
                txt.hidden = false;
            },
            dismiss: function () {
                if (!this.active()) {
                    return;
                }
                txt.text = "";
                bg.hidden = true;
                txt.hidden = true;
            },
            active: function () {
                return !bg.hidden;
            },
            destroy: function () {
                bg.destroy();
                txt.destroy();
            },
        };
    }
    var hasKey = false;
    var dialog = addDialog();
    player.onCollide("key", function (key) {
        destroy(key);
        hasKey = true;
    });
    player.onCollide("door", function () {
        if (hasKey) {
            if (levelIdx + 1 < levels.length) {
                go("main", levelIdx + 1);
            }
            else {
                go("win");
            }
        }
        else {
            dialog.say("get a key man");
        }
    });
    // talk on touch
    player.onCollide("character", function (ch) {
        dialog.say(ch.msg);
    });
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
    onKeyDown("a", function () {
        player.move(-SPEED, 0);
    });
    onKeyDown("d", function () {
        player.move(SPEED, 0);
    });
    onKeyDown("w", function () {
        player.move(0, -SPEED);
    });
    onKeyDown("s", function () {
        player.move(0, SPEED);
    });
    /*
    onKeyPress("q", () => {
      const list = Object.keys(effects)
      curEffect = curEffect === 0 ? list.length - 1 : curEffect - 1
      label.text = list[curEffect]
    })
    */
});
scene("win", function () {
    add([
        text("You Escaped the Basement!"),
        pos(width() / 2, height() / 2),
        anchor("center"),
    ]);
});
go("main", 0);
