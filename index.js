function changeColorText () {
    const button = document.querySelector('.js--button');
    console.log(button);
    const text = document.querySelector('p');
    console.log(text);
    button.addEventListener('click', () => {
        if (text.style.color === 'black') {
            text.style.color = 'white';
            text.style.backgroundColor = 'rgb(50, 21, 4)'
        } else {
            text.style.color = 'black';
            text.style.backgroundColor = 'yellow'
        }
    })
}


function createTable() {
    const container = document.querySelector('.js--tablePifagor');
    let tableHTML = '<table>';
    for (i = 1; i <= 10; i++) {
        tableHTML = tableHTML + '<tr>';
        for (let j = 1; j <= 10; j++){
        tableHTML = tableHTML + `<td>${i * j}<td>`
        }
        tableHTML = tableHTML + `</tr>`;
    }
    tableHTML += '</table>';
    container.innerHTML = tableHTML;
}


function getRandomImage() {
    const button = document.querySelector('.js--btnRandom');
    const pictureArray = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg"];
    const randomImageElement = document.querySelector('img');
    console.log(randomImageElement);
    function randomImage() {
        const randomIndex = Math.floor(Math.random() * pictureArray.length);
        const randomImagePath = pictureArray[randomIndex];
        randomImageElement.src = randomImagePath;
    }
    button.addEventListener("click", randomImage);
}

document.addEventListener('DOMContentLoaded', function () {
    createTable();
    changeColorText();
    getRandomImage();
})


