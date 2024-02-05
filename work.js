// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from JSON and dynamically populate the "work" page
    fetch('work.json')
        .then(response => response.json())
        .then(data => {
            const workContainer = document.getElementById('work');
            data.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('card');

                const logo = document.createElement('img');
                logo.src = project.logo;
                logo.alt = project.title;

                const info = document.createElement('div');
                info.classList.add('card-content');

                const title = document.createElement('h2');
                title.classList.add('card-title');
                const titleLink = document.createElement('a');
                titleLink.href = project.link;
                titleLink.textContent = project.title;
                title.appendChild(titleLink);

                const description = document.createElement('p');
                description.classList.add('card-description');
                description.textContent = project.description;

                info.appendChild(title);
                info.appendChild(description);

                card.appendChild(logo);
                card.appendChild(info);

                workContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
