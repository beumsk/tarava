# T🔥r💧v🍃

Tarava is an old school rpg inspired by my young years playing pokemon red. The story is based on the 4 elements: air, earth, water, fire. They are the base of everything on earth and our quest is to bring back freedom of the people by mastering the 4 elements and beat the evil masters.

## How to play

<p>Fight your way through enemies leading to new maps leading to new worlds to finally beat the masters and bring peace.</p>
<p>You can use touch/clicks or keyboard.</p>
<p><kbd>Esc</kbd>: open/close menu when walking in the world</p>
<p><kbd>◂▴▾▸</kbd>: navigate menus and select buttons</p>
<p><kbd>Enter | Spacebar</kbd>: validate selection</p>
<p><kbd>Return</kbd>: go back</p>

## Game Theme

- inspired from avatar -> fight your way to peace in a world of 4 elements
  - air > earth > water > fire
    - 💨 erodes 🍃 > 🍃 absorbs 💧 > 💧 extinguishes 🔥 > 🔥 consumes 💨
  - master the 4 elements through game
    - lvl up and finish maps to get elemental attacks
    - finish a world to master its element
    - defeat master at the end

## Game Design (GD)

- pokemon-rpg like, walking around and fighting enemies
- central map: doors to different element worlds
  - => go on the element of choice > finish the different maps (n, w, e, s) and center map to master x4 (elements)
    - you learn elemental attacks of world in rewards and get a thing showing we finished world
    - each map has monsters of any type to beat (+ quests?)
  - => master door opens > beat 4 masters + high master and win
- Dmg = (dmg+str-def) x elmt(0.75|1|1.5) x isMaster(1|1.5) x crit + range
  - => power up player/enemy with str-def & improving attacks
- Player lvlUp => dmg+20% & def+10% (& 1 scroll)
- Enemy lvlUp => dmg+20% & def+10%
- Items are in shop and rewards
- Stuff are in shop or rewards
- Attacks are in dojo: learn or improve with scrolls

## Todo

- too much time is taken in fights > give other goals > quests, achievements, attack xp,
- not always same number of enemies on a map ? => 3,4,5,6,7 for each world?

- auto save game??
- confirmation modal => buy any, use item, equip stuf
- improve fights: better ai => how ?
- give enemies more attacks => should they have the same ones as player attacks?

- review lvlup => give points to distribute on stats ?
- elemental str&def?
- max of 4 attacks? select the ones to have in fight

- simplify codes: map change, dry as much as possible (enemy/player attack, btnCreation, ...?)

- improve maps: add things on those: npc, quests,
- => create paths on map? at least some decoration.

- test difficulty of game & add difficulty option?
- graphics: colors, animations, transitions, backgrounds

  - visuals on transitions (new world)
  - attacks: in fights and menus ?
  - items & stuff in menus ?

- ask player name?

> randomize

- rewardScreen => add boost? && option to pick average (5) or random (1-10) ?

> other

- handle items curing malus

- other player sprites to pick when starting?
- add time of play (+ paused when unfocus page?)
- panoplie boost??

- add visuals of items, stuff, attacks, fights...
- add sounds effects? => rewards, attacks, movements, clicks

- world: game design? puzzle on some map?
- quests / achievements

## Ideas

- first fight intro+tuto against master that we lose as we only have basic attacks?
- more fights? add element on map to add new enemies or trainingMap?
- save/load via download/upload file? (encrypt data to avoid cheat?)
- quests in menu?
  - npc as deadSpots => when hitting => dialog screen? and start quest
- achievements in menu?
  - kill all kind of monsters, get all chest, stuff, attacks, elements
- add a lottery?
- flee a fight?
- map enigmas?
- review map to move outside of screen?
- text logo T🔥r💧v🍃 ?

## Useful

- pixelart 8bit creation at: https://www.pixilart.com/draw
- ascii: https://www.ee.ucl.ac.uk/~mflanaga/java/HTMLandASCIItableC1.html
- ↗ ⫯ ◈ ⋈ ↣ ∇ ♥ ❖ ☴ ☷ ☵ ☲ Ŧ ← → ↑ ↓ ▴ ▾ ◂ ▸ // ▣ ⨀ ♪ ♀ ♂ ✠ ∾
- 8 bit soundtracks: https://www.youtube.com/watch?v=5bn3Jmvep1k
- sprites characters: http://www.videogamesprites.net/FinalFantasy5/
- sprites: https://ccrgeek.wordpress.com/rpg-maker-ace/graphics/

## Dev

- 30.10.2023 => +-152 hours total dev
