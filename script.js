document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    // Desativar o botão de enviar
    document.getElementById('submitButton').disabled = true;
 
    // Ativar o botão "Responder novamente"
    document.getElementById('retryButton').disabled = false;
 
    // Calcular e exibir o resultado
    submitQuiz();
});

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

document.getElementById('retryButton').addEventListener('click', function() {
    document.getElementById('quiz-form').reset();

    document.getElementById('submitButton').disabled = false;
    document.getElementById('retryButton').disabled = true;

    document.getElementById('result').innerText = '';
});

function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        option.disabled = true;
    });
}

function submitQuiz() {
    let correctAnswers = {
        q1: 'B',
        q2: 'C',
        q3: 'B',
        q4: 'C',
        q5: 'A',
        q6: 'C',
        q7: 'A',
        q8: 'B',
        q9: 'A',
        q10: 'C'
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        let questionName = `q${i}`;
        let userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
       
        if (userAnswer && userAnswer.value === correctAnswers[questionName]) {
            score++;
        }
    }

    let resultText = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    document.getElementById('result').innerText = resultText;

    if (score === totalQuestions) {
        document.getElementById('venceusom').play();
    } else if (score < 4) {
        document.getElementById('perdeusom').play();
    }
}

document.getElementById('retryButton').addEventListener('click', function() {
    // Resetar o formulário
    document.getElementById('quiz-form').reset();
 
    // Ativar o botão de enviar e desativar o botão de responder novamente
    document.getElementById('submitButton').disabled = false;
    document.getElementById('retryButton').disabled = true;
 
    // Limpar o resultado
    document.getElementById('result').innerText = '';
});
