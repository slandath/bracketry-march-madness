import { createBracket } from 'bracketry'
import teams from './data.js'

const wrapper = document.querySelector('#bracketry-wrapper')

const mobileOptions = {
    navButtonsPosition: 'beforeTitles',
    visibleRoundsCount: 2,
    matchMaxWidth: 360,
    leftNavButtonHTML: `<div style="padding: 7px;">< PREV ROUND</div>`,
    rightNavButtonHTML: `<div style="padding: 7px;">NEXT ROUND ></div>`,
    roundTitlesFontSize: 26,
    roundTitlesVerticalPadding: 4,
    matchFontSize: 14,
    matchHorMargin: 2,
    distanceBetweenScorePairs: 10,
    disableHighlight: true,
    verticalScrollMode: 'mixed',
    scrollButtonPadding: '0px'
}

let options = {
    getEntryStatusHTML: (es) => {
        return `<div style="width: 30px; text-align: center; color: #818181; font-size: 12px;">${es || ''}</div>`
    },
    getNationalityHTML: p => {
        return `<img style="width: 16px; visibility: ${p.nationality ? 'visible' : 'hidden'}"
                src="https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/${p.nationality?.toLowerCase()}.svg">`
    },
    visibleRoundsCount: 2
}

if (window.innerWidth < 700) {
    options = { ...options, ...mobileOptions }
}

createBracket(
    teams,
    wrapper,
    options
)
