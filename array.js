function numPointsScored(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];

    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  const names = [];

  for (let teamKey in game) {
    names.push(game[teamKey].teamName);
  }

  return names;
}