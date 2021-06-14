const form = document.querySelector('.form');
const blockTable = document.querySelector('.render-table');
const elemBlockLink = document.querySelector('.link-graphick');

form.addEventListener('submit', getYear);

function getData(url) {
    return res = fetch(url)
    .then(result => result.json());
}

function getYear(e) {
    e.preventDefault();
    const year = this.querySelector('select').value;
    let prom = getData('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440')
    .then(result => {
        getInfoPeriod(result, year);
    });
}

function getInfoPeriod(arr, year) {
    let result = arr.filter(el => el.year == year);
    renderTable(result, year);
}

function renderTable(arr, year) {
    let obj = arr[0].sales;
    let trTh = '';
    let trTd = '';
    let index = 0;
    let arrData = [];

    for(let a in obj) {
        ++index;
        trTh += `<th>${index} кв.</th>`;
        trTd += `<td>${obj[a]}</td>`;
        arrData.push(obj[a]);
    }

    let table = document.createElement('table');
    table.setAttribute('border', 1);
    table.classList.add('table')
    table.innerHTML = `<tr>${trTh}</tr><tr>${trTd}</tr>`;
    blockTable.innerHTML = '';
    blockTable.appendChild(table)
    console.log(trTh, trTd);

    linkGraphick(arrData, year);
}

function linkGraphick(arrData, year) {
    let total = arrData[0] + arrData[1] + arrData[2] + arrData[3];
    const link = document.createElement('a');
    
    const linkGraphick = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${year} год ${total}$',data:[${arrData[0]},${arrData[1]},${arrData[2]},${arrData[3]}]}]}}`;
    link.setAttribute('href', linkGraphick);
    link.setAttribute('target', '_blank');
    link.innerText = 'Посмотреть график продаж';
    elemBlockLink.innerHTML = '';
    elemBlockLink.appendChild(link);
}

