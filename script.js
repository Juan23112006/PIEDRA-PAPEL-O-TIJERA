function play(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = '¡Ganaste!';
    } else {
        result = 'Perdiste!';
    }

    document.getElementById('result').innerText = `Computadora eligió: ${computerChoice}. ${result}`;
}

