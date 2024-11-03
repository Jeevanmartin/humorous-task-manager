const successSound = document.getElementById('successSound');
const failSound = document.getElementById('failSound');

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const moodInput = document.getElementById('moodInput');
    const taskText = taskInput.value.trim();
    const moodText = moodInput.value.trim().toLowerCase();

    const happyResponses = [
        `${taskText} - You’re on fire! 🔥 Keep those tasks coming!`,
        `${taskText} - Wow, look at you being all productive! Go, you! 🎉`,
        `${taskText} - This task won't know what hit it! 💥`
    ];

    const lazyResponses = [
        `${taskText} - It's okay, it’s just a suggestion! 😴`,
        `${taskText} - Another task? Let's just think about it... tomorrow! ⏳`,
        `${taskText} - Tasks are overrated. Let’s chill! 🍕`
    ];

    const sadResponses = [
        `${taskText} - Remember, even the best tasks take time! 🌧️`,
        `${taskText} - It's okay to cry while you work... it helps with hydration! 😢💧`,
        `${taskText} - Hang in there! You’re doing better than your laundry! 🧺`
    ];

    let responses, soundEffect;
    switch (moodText) {
        case 'happy':
            responses = happyResponses;
            soundEffect = 'success.mp3';
            document.body.style.backgroundColor = 'lightyellow';
            triggerConfetti();
            break;
        case 'lazy':
            responses = lazyResponses;
            soundEffect = 'lazy.mp3';
            document.body.style.backgroundColor = 'lightblue';
            break;
        case 'sad':
            responses = sadResponses;
            soundEffect = 'sad.mp3';
            document.body.style.backgroundColor = 'lightgrey';
            break;
        default:
            responses = happyResponses;
            soundEffect = 'default.mp3';
    }

    if (taskText) {
        const randomIndex = Math.floor(Math.random() * responses.length);
        const li = document.createElement('li');
        li.textContent = responses[randomIndex];
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input
        moodInput.value = ''; // Clear the mood input
        playSound(soundEffect);
    } else {
        alert('Please enter a task!');
        failSound.play();
    }
});

function playSound(fileName) {
    const audio = new Audio(fileName);
    audio.play();
}

function triggerConfetti() {
    // Code for confetti effect
    // This is a basic animation placeholder for demonstration
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);
    setTimeout(() => document.body.removeChild(confetti), 3000);
}
