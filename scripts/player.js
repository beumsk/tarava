const player = {
  name: 'Player',
  x: 2 * 16,
  y: 2 * 16,
  w: 16,
  h: 16,
  fill: cPlayer,
  hp: 30,
  hpmax: 100,
  state: 'asleep',
  str: 20,
  lvl: 1,
  xp: 0,
  gold: 0,
  attacks: [
    {
      name: 'punch',
      dmg: 10,
    },
    {
      name: 'kick',
      dmg: 20,
    },
  ],
  items: [
    {
      name: 'potion',
      type: 'heal',
      effect: 20,
      qtt: 1,
    },
    { name: 'remedy', type: 'state', effect: '', qtt: 1 },
    { name: 'waker', type: 'state', effect: 'asleep', qtt: 1 },
    // add boosts and more items
  ],
  useAttack: (attack) => {
    const c = player.attacks.find((x) => x.name === attack);
    subText = 'oui';
    if (c.dmg >= currentEnemy.hp) {
      currentEnemy.hp = 0;
    } else {
      currentEnemy.hp -= c.dmg;
    }
  },
  useItem: (item) => {
    const c = player.items.find((x) => x.name === item);
    if (c.qtt > 0) {
      c.qtt -= 1;
      if (c.type === 'heal') {
        player.hp + c.effect <= player.hpmax
          ? (player.hp += c.effect)
          : (player.hp = player.hpmax);
      } else if (c.type === 'state') {
        c.effect === ''
          ? (player.state = c.effect)
          : player.state.replace(c.effect, '');
      }
    } else {
      console.log(`No ${c.name} anymore`);
    }
  },
  endFight: () => {
    player.xp += currentEnemy.xp;
    player.gold += currentEnemy.gold;
    checkLvlUp(player.lvl, player.xp);
  },
};
