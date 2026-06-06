lucide.createIcons();

const profileBtn = document.querySelector('.profile-btn');
const dropdown = document.querySelector('.dropdown');

profileBtn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

const ctx = document.getElementById('situationchart');

new Chart(ctx, {
    type: 'doughnut',

    data: {
        labels: [
            'Aprovadas',
            'Melhorar',
            'Críticas'
        ],

        datasets: [{
            data: [10, 2, 4],

            backgroundColor: [
                '#22C55E',
                '#F59E0B',
                '#EF4444'
            ],

            borderWidth: 0
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        }
    }
});