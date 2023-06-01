// When a text input is detected...
function changeFont() {
    const input = document.getElementById('myInput').value;
    const displayText = document.getElementById('displayText');

    displayText.innerHTML = '';

    for (let i = 0; i < input.length; i++) {
        const span = document.createElement('span');
        span.textContent = input[i];

        // get a random class between 1 and 61 to put on thingy
        const randomClass = Math.floor(Math.random() * 61) + 1;

        span.className = 'font' + randomClass;
        displayText.appendChild(span);
    }
}

// change title!

function changeTitle() {
    const title = document.getElementById('title');
    title.textContent = randomWord() + " " + randomWord() + " " + randomWord() + " " + randomWord();
}

function randomWord() {
    const titleWords = ['Random', 'Text', 'Font', 'Generator'];
    return titleWords[Math.floor(Math.random() * titleWords.length)];
}

// Change the title every 2 seconds
setInterval(changeTitle, 2000);