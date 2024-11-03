const happySound = document.getElementById('happySound');
const lazySound = document.getElementById('lazySound');
const sadSound = document.getElementById('sadSound');

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
        let soundToPlay;
        let backgroundColor;

        switch (moodText) {
            case 'happy':
                responses = happyResponses;
                soundToPlay = happySound;
                backgroundColor = '#d1ffd1'; // Light green
                break;
            case 'lazy':
                responses = lazyResponses;
                soundToPlay = lazySound;
                backgroundColor = '#fff7d1'; // Light yellow
                break;
            case 'sad':
                responses = sadResponses;
                soundToPlay = sadSound;
                backgroundColor = '#ffd1d1'; // Light red
                break;
            default:
                responses = happyResponses; // Default to happy if mood is not recognized
                soundToPlay = happySound;
                backgroundColor = '#d1ffd1'; // Light green
        }

        const randomIndex = Math.floor(Math.random() * responses.length);
        const li = document.createElement('li');
        li.textContent = responses[randomIndex];
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input
        moodInput.value = ''; // Clear the mood input

        // Change background color and play sound
        document.body.style.backgroundColor = backgroundColor;
        soundToPlay.play();
    } else {
        alert('Please enter a task!');
    }
});
