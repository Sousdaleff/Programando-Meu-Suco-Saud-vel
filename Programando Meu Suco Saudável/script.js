// Dados iniciais para o gráfico
const ctx = document.getElementById('consumoGrafico').getContext('2d');
let consumoGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Suco Natural', 'Suco de Laranja', 'Suco Verde', 'Outros'],  // Valores iniciais
        datasets: [{
            label: 'Consumo Médio (litros por pessoa/ano)',
            data: [20, 35, 10, 20],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                ticks: {
                    autoSkip: false,  // Não pular rótulos
                    callback: function(value, index, values) {
                        return this.chart.data.labels[index];
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: false  // Desabilitar tooltips
            }
        }
    }
});

// Função para atualizar os nomes no eixo X
function atualizarEixoX() {
    const suco1 = document.getElementById('suco1').value;
    const suco2 = document.getElementById('suco2').value;
    const suco3 = document.getElementById('suco3').value;
    const suco4 = document.getElementById('suco4').value;
    
    // Atualiza os rótulos do eixo X
    consumoGrafico.data.labels = [suco1, suco2, suco3, suco4];
    
    // Atualiza o gráfico para refletir as mudanças
    consumoGrafico.update();
}

// Função para editar os textos dos flashcards