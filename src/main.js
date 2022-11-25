const chart = document.querySelector('#chart').getContext('2d')

// Chart.js
new Chart(chart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul','Ago', 'Set', 'Out', 'Nov'],

    datasets: [
      {
        label: 'BTC',
        data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'ETH',
        data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
        borderColor: 'blue',
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
})

// Mostrar ou esconder a sidebar
const menuBtn = document.querySelector('#menu-btn')
const CloseBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('aside')

menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'block'
})

CloseBtn.addEventListener('click', () => {
  sidebar.style.display = 'none'
})

// Mudar tema (escuro ou claro)
const themebtn = document.querySelector('.theme-btn')

themebtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

  themebtn.querySelector('span:first-child').classList.toogle('active')
  themebtn.querySelector('span:last-child').classList.toogle('active')
})