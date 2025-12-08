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

["Brooklyn Nets", "Charlotte Hornets"]

function playerNumbers(teamName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];

    if (team.teamName === teamName) {
      const numbers = [];

      for (let player in team.players) {
        numbers.push(team.players[player].number);
      }

      return numbers;
    }
  }
}

function playerStats(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (players[playerName]) {
      return players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoe = 0;
  let rebounds = 0;

  for (let teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    for (let player in players) {
      const shoe = players[player].shoe;

      if (shoe > largestShoe) {
        largestShoe = shoe;
        rebounds = players[player].rebounds;
      }
    }
  }

  return rebounds;
}

