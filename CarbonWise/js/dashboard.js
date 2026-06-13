const ctx = document.getElementById('carbonChart');

new Chart(ctx, {

type: 'line',

data: {

labels: [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul'
],

datasets: [{

label: 'Carbon Emissions (kg CO₂)',

data: [
180,
160,
145,
120,
100,
90,
75
],

borderWidth: 4,

fill: true,

tension: 0.4

}]

},

options: {

responsive: true,

plugins: {

legend: {

display: true

}

}

}

});