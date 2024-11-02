const successSound = document.getElementById('successSound');
const failSound = document.getElementById('failSound');

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const moodInput = document.getElementById('moodInput');
    const taskText = taskInput.value.trim();
    const moodText = moodInput.value.trim().toLowerCase();

    if (taskText) {
        const happyResponses = [
            `${taskText} - You’re on fire! 🔥 Keep those tasks coming!`,
            `${taskText} - Wow, look at you being all productive! Go, you! 🎉`,
            `${taskText} - This task won't know what hit it! 💥`,
        ];
        
        const lazyResponses = [
            `${taskText} - It's okay, it’s just a suggestion! 😴`,
            `${taskText} - Another task? Let's just think about it... tomorrow! ⏳`,
            `${taskText} - Tasks are overrated. Let’s chill! 🍕`,
        ];
        
        const sadResponses = [
            `${taskText} - Remember, even the best tasks take time! 🌧️`,
            `${taskText} - It's okay to cry while you work... it helps with hydration! 😢💧`,
            `${taskText} - Hang in there! You’re doing better than your laundry! 🧺`,
        ];

        let responses;
        switch (moodText) {
            case 'happy':
                responses = happyResponses;
                break;
            case 'lazy':
                responses = lazyResponses;
                break;
            case 'sad':
                responses = sadResponses;
                break;
            default:
                responses = happyResponses; // Default to happy if mood is not recognized
        }

        const randomIndex = Math.floor(Math.random() * responses.length);
        const li = document.createElement('li');
        li.textContent = responses[randomIndex];
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input
        moodInput.value = ''; // Clear the mood input

        // Play success sound
        successSound.currentTime = 0; // Reset sound to start
        successSound.play();
    } else {
        alert('Please enter a task!');
        failSound.currentTime = 0; // Reset sound to start
        failSound.play();
    }
});
