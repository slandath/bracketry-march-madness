import { createBracket } from 'bracketry'
import teams from './data.js'

document.addEventListener("DOMContentLoaded", getCurrentYear);

const wrapper = document.querySelector('#bracketry-wrapper')

const mobileOptions = {
    navButtonsPosition: 'beforeTitles',
    visibleRoundsCount: 1,
    matchMaxWidth: 360,
    leftNavButtonHTML: `<div style="padding: 7px;">< PREV ROUND</div>`,
    rightNavButtonHTML: `<div style="padding: 7px;">NEXT ROUND ></div>`,
    roundTitlesFontSize: 26,
    roundTitlesVerticalPadding: 4,
    matchFontSize: 14,
    matchHorMargin: 2,
    distanceBetweenScorePairs: 10,
    disableHighlight: true,
    verticalScrollMode: 'native',
    scrollButtonPadding: '0px'
}

let options = {
    getEntryStatusHTML: (es) => {
        return `<div style="width: 30px; text-align: center; color: #818181; font-size: 12px;">${es || ''}</div>`
    },
    getNationalityHTML: p => {
        return `<img style="width: 16px; visibility: ${p.logo ? 'visible' : 'hidden'}"
                src="https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/${p.logo?.toLowerCase()}.svg">`
    },
    visibleRoundsCount: 4
}

if (window.innerWidth < 700) {
    options = { ...options, ...mobileOptions }
}

createBracket(
    teams,
    wrapper,
    options
)

function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearId = document.getElementById("year");
    if (yearId) {
        yearId.textContent = currentYear;
    }
    console.log(window.innerWidth)
}