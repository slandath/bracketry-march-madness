import { createBracket } from 'https://cdn.jsdelivr.net/npm/bracketry@latest/+esm'
import tennis_singles from './data.mjs'

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
    verticalScrollMode: 'mixed',
    scrollButtonPadding: '0px'
}

let options = {
    getEntryStatusHTML: (es) => {
        return `<div style="width: 30px; text-align: center; color: #818181; font-size: 12px;">${es || ''}</div>`
    },
    getNationalityHTML: p => {
        return `<img style="width: 16px; visibility: ${p.nationality ? 'visible' : 'hidden'}"
                src="https://flagcdn.com/16x12/${p.nationality?.toLowerCase()}.png">`
    }
}

if (window.innerWidth < 700) {
    options = { ...options, ...mobileOptions }
}

createBracket(
    tennis_singles,
    document.querySelector('#bracketry-wrapper'),
    options
)
