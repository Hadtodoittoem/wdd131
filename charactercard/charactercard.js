const enemy = {
    name: 'Snortleblat',
    class: 'Swamp Beast Shaman',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',

    attacked: function () {
        this.health -= 20;

        if (this.health < 0) {
            this.health = 0;
            loadEnemy(this);
            alert('Enemy Slain');
        } else {
            loadEnemy(this);
        }
    },

    levelUp: function () {
        this.level += 1;
        loadEnemy(this);
    }
};

function enemyTemplate(enemy) {
    return `<div class="card">
        <img src="${enemy.image}" alt="${enemy.name}">

        <div class="name">
            <h1>${enemy.name}</h1>
        </div>

        <div class="stats">
            <p><strong>Class:</strong> ${enemy.class}</p>
            <p><strong>Level:</strong> ${enemy.level}</p>
            <p><strong>Health:</strong> ${enemy.health}</p>
        </div>

        <div class="buttons">
        <button id="attackButton">Attack</button>
        <button id="levelButton">Level Up</button>
        </div>
        
    </div>`;
}

function loadEnemy(enemy) {
    document.querySelector('#characterCard').innerHTML = enemyTemplate(enemy);

    document.querySelector('#attackButton').addEventListener('click', function () {
        enemy.attacked();
    });

    document.querySelector('#levelButton').addEventListener('click', function () {
        enemy.levelUp();
    });
}

loadEnemy(enemy);