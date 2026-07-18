const musicList = [];

const musicForm = document.querySelector('#music-form');
const musicListContainer = document.querySelector('#music-list');
const filterButtons = document.querySelectorAll('.filter-buttons button');

let currentFilter = 'all';

musicForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const artist = document.querySelector("#artist").value;
    const genre = document.querySelector("#genre").value;
    const mood = document.querySelector("#mood").value;
    const status = document.querySelector("#status").value;
    const musicItem = {
        title: title,
        artist: artist,
        genre: genre,
        mood: mood,
        status: status
    };

    musicList.push(musicItem);
    musicForm.reset();

    displayMusic();
});

    
filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove('active-filter');
        });
        button.classList.add('active-filter');

        displayMusic();
    });
});

function displayMusic() {
    musicListContainer.innerHTML = '';
    musicList.forEach(function (item, index) {
        if (currentFilter !== 'all' && item.status !== currentFilter) {
            return;
        }
        const musicCard = document.createElement('div');
        musicCard.classList.add('music-card');
        musicCard.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Artist:</strong> ${item.artist}</p>
            <p><strong>Genre:</strong> ${item.genre}</p>
            <p><strong>Mood:</strong> ${item.mood}</p>
            <p><strong>Status:</strong> ${item.status}</p>
            <button class="status-button" data-index="${index}">Mark as Listened</button>
        `;
        const statusButton = musicCard.querySelector('.status-button');
        statusButton.addEventListener('click', function () {
            musicList[index].status = 'Listened';
            displayMusic();
        });
        musicListContainer.appendChild(musicCard);
    });
}