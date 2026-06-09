const materias = JSON.parse(
    localStorage.getItem("materias")
) || [];

const totalMaterias = document.getElementById("totalMaterias");

if(totalMaterias){
    totalMaterias.textContent = materias.length;
}

const ctx = document.getElementById('situationchart');

if (ctx) {
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
}