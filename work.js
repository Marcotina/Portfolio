document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from JSON and dynamically populate the "work" page
    fetch('work.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); // Log the fetched data to the console

            const workContainer = document.getElementById('work');
            data.forEach(project => {
                const card = document.createElement('div');
                card.classList.add('card');

                const logo = document.createElement('img');
                logo.src = project.logo;
                logo.alt = project.title;

                const info = document.createElement('div');
                const title = document.createElement('h2');
                title.textContent = project.title;
                const description = document.createElement('p');
                description.textContent = project.description;
                const link = document.createElement('a');
                link.href = project.link;
                link.textContent = 'Visit Website';

                info.appendChild(title);
                info.appendChild(description);
                info.appendChild(link);

                card.appendChild(logo);
                card.appendChild(info);

                workContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
