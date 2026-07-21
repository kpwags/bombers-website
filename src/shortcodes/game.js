export const gameShortcode = (game) =>  {
	const getTitle = () => {
		if (!game.complete) {
			return game.date;
		}

		const date = game.date.split('at')[0].trim();


		return `<span>${date}</span><span class="final">final</span>`;
	}

	return `
		<div class="game">
			<div class="time">${getTitle()}</div>
			<div class="teams">
				<div class="team away ${(game.complete && game.away.score > game.home.score || (game.forfeit && game.forfeit === 'home')) ? 'winner' : ''}">
					<div class="name">
						<span>away</span>
						<div>${game.away.team}${(game.forfeit && game.forfeit === 'away') ? ' <em>(forfeit)</em>' : ''}</div>
					</div>
					<div class="score">${game.complete ? game.away.score : '-'}</div>
				</div>
				<div class="team home ${(game.complete && game.home.score > game.away.score || (game.forfeit && game.forfeit === 'away')) ? 'winner' : ''}">
					<div class="name">
						<span>home</span>
						<div>${game.home.team}${(game.forfeit && game.forfeit === 'home') ? ' <em>(forfeit)</em>' : ''}</div>
					</div>
					<div class="score">${game.complete ? game.home.score : '-'}</div>
				</div>
			</div>
			${game.title ? `<div class="title">${game.title}</div>` : ''}
		</div>
	`;
}
