export const seasonRecord = (season) => {
	let wins = 0;
	let losses = 0;
	let ties = 0;

	const games = season.pastGames;

	games.forEach((game) => {
		const homeScore = game.home.score;
		const awayScore = game.away.score;
		const areBombersHomeTeam = game.home.team === 'Bombers';

		if (homeScore === awayScore) {
			ties = ties + 1;
		} else if (areBombersHomeTeam && homeScore > awayScore) {
			wins = wins + 1;
		} else if (!areBombersHomeTeam && awayScore > homeScore) {
			wins = wins + 1;
		} else {
			losses = losses + 1;
		}
	});

	const points = (wins * 2) + ties

	return `${wins} - ${losses} - ${ties} (${points})`;
};
