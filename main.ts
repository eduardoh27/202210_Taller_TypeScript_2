import { Serie } from './Serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonNumber: HTMLElement = document.getElementById('avg-seasons')!;
const seriesCardDiv: HTMLElement = document.getElementById('card-series')!;
let nameButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('btn-serie-name')!; // colección de botones para
                                                                                                 // todas las posibles series.

renderCoursesInTable(dataSeries);
avgSeasonNumber.innerHTML = `${calculateAvgSeasonsNumber(dataSeries)}`;


for (let i = 0; i < nameButtons.length; i++) {
    nameButtons[i].addEventListener("click", () => {
        clearSerieCard();
        renderSerieCard(dataSeries[i]);
    });
}

function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td><button class='btn-serie-name'>${serie.name}</button></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function calculateAvgSeasonsNumber(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}

function renderSerieCard(serie: Serie): void {
    console.log('Desplegando tarjeta');
    let divElement = document.createElement("div");
        divElement.innerHTML = `<img class='card-img-top' src="${serie.image}" alt='image-serie-${serie.name}'>
                                <div class='card-body'>
                                    <h5 class='card-title'>${serie.name}</h5>
                                    <p class='card-text'>${serie.description}</p>
                                    <a href="${serie.review}">${serie.review}</a>
                                </div>`;
    seriesCardDiv.appendChild(divElement);
}

function clearSerieCard() {
    while (seriesCardDiv.hasChildNodes()) {
        if (seriesCardDiv.firstChild != null) {
            seriesCardDiv.removeChild(seriesCardDiv.firstChild);
        }
    }
}
