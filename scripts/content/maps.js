// GD: temple map to reach different elements world
// GD: each world is composed of 5 maps: north, west, east, south and central (where you fight the spirit)
// GD: reveal next map door when lvl up
// GD: finished world takes back to temple to start a new world
// GD: 4 elements worlds finished => spirit world (n,w,e,s,c) OR master league
// GD: spirit/master finished => end of game

const spotBase = { x: 0, y: 0, w: 16, h: 16, type: 'wall', fill: cBlack };

const chestBase = {
  ...spotBase,
  type: 'chest',
  fill: cChest,
  img: './img/chest.png',
  unlocked: false,
};

const doorBase = {
  ...spotBase,
  type: 'door',
  fill: cDoor,
  img: './img/door.png',
  x: 21 * 16,
  y: 11 * 16,
};

const hideDoorBase = {
  ...doorBase,
  type: 'hide-door',
  img: null,
  fill: cBlack,
};

let mapsBase = [
  {
    name: 'temple',
    deadSpots: [
      { ...spotBase, x: 9 * 16, y: 4 * 16, type: 'air', fill: cYellow },
      { ...spotBase, x: 12 * 16, y: 4 * 16, type: 'earth', fill: cGreen },
      { ...spotBase, x: 12 * 16, y: 7 * 16, type: 'water', fill: cBlue },
      { ...spotBase, x: 9 * 16, y: 7 * 16, type: 'fire', fill: cRed },
      // { ...spotBase, x: 0 * 16, y: 0 * 16, type: 'master', fill: cViolet },
    ],
  },
];

let maps;
let currentWorld;
let currentMap;

function codeWorldMaps(world) {
  if (maps.find((x) => x.name === world)) return;

  maps.push({ name: world, districts: codeDistricts(world) });

  function codeDistricts() {
    let districts = ['northern', 'western', 'eastern', 'southern', 'central'];
    // DEV: 1 map per world
    // let districts = ['central'];

    return districts.map((y, i) => {
      return {
        lvl: player.elements.length * districts.length + i + 1,
        name: `${y} ${world} ${world === 'master' ? '' : 'tribe'}`,
        world: world,
        // TODO: add rewards ! (semi random based on lvl)
        deadSpots: [
          {
            ...chestBase,
            ...randPos(baseW, baseH, step, [
              { x: player.x, y: player.y },
              { x: doorBase.x, y: doorBase.y },
            ]),
          },
          { ...hideDoorBase },
          {
            ...doorBase,
            element: world,
            district: i + 1,
            type: world === 'master' ? 'end-door' : y === 'central' ? 'temple-door' : 'door',
          },
        ],
      };
    });
  }
}

function randomKeyDrop() {
  if (rand(5) === 1) {
    const mapChest = currentMap.deadSpots.find((x) => x.type === 'chest' && !x.unlocked);
    if (!mapChest) return false;
    mapChest.unlocked = true;
    infoQueue.push(() => (infoEl.innerText = `You found the key to open the chest`));
    return true;
  }
  return false;
}

function changeMap(world, to, masteredElement) {
  if (to === 'temple') {
    cGrad2 = cBack4;
    stateEl.style.background = cBack2;
    currentMap = { ...maps[0] };
    currentEnemy = {};
    screenTransition('top', () => screenStory(masteredElement));
  } else if (to === 'first') {
    codeWorldMaps(world);
    cGrad2 = colorGrid[world];
    stateEl.style.background = colorGrid[world];
    currentWorld = maps.find((x) => x.name === world);
    currentMap = currentWorld.districts[0];
    codeMapEnemies(world, currentMap.lvl);
    screenTransition('top', () => screenWorld());
  } else if (to === 'next') {
    currentMap = currentWorld.districts.find((x) => x.lvl === currentMap.lvl + 1);
    codeMapEnemies(world, currentMap.lvl);
    screenTransition('top', () => screenWorld());
  }
  infoQueue.push(() => (infoEl.innerText = `You reached map ${currentMap.name}`));
  player.x = 2 * step;
  player.y = 2 * step;
}

function worldCompleted(element) {
  player.elements.push(element);
  maps[0].deadSpots.find((x) => x.type === element).fill = cBlack;
  maps[0].deadSpots.find((x) => x.type === element).type = '';
  if (player.elements.length === 4) {
    maps[0].deadSpots.push(
      { ...spotBase, x: 10 * 16, y: 5 * 16, type: 'master', fill: cYellow },
      { ...spotBase, x: 11 * 16, y: 5 * 16, type: 'master', fill: cGreen },
      { ...spotBase, x: 11 * 16, y: 6 * 16, type: 'master', fill: cBlue },
      { ...spotBase, x: 10 * 16, y: 6 * 16, type: 'master', fill: cRed }
    );
  }
}

function randomRewards() {
  // TODO: review items rewards => they are so useless compared to alternative gems or stuff
  let rewardItems = items.filter((x) => x.lvl <= currentMap.lvl && x.src.includes('reward'));
  let rewardStuff = stuff.filter(
    (x) => x.lvl === currentMap.lvl && x.src.includes('reward') && !stuffRewarded.includes(x)
  );
  let rewardGems = currentMap.lvl * 5;
  return {
    item: rewardItems[rand(rewardItems.length)],
    stuff: rewardStuff[rand(rewardStuff.length)],
    gems: rewardGems,
  };
}
