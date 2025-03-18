# March Madness Bracket

Digital bracket for the NCAA Men's Basketball Tournament - powered by [Bracketry](https://github.com/sbachinin/bracketry).

## Options

* Uses `isServing` for predicted winner
* Uses `isWinner` for actual winner

```
        {
            "roundIndex": 0,
            "sides": [
                {
                    "contestantId": "01",
                    "scores": [
                        {
                            "mainScore": 76,
                        },
                    ],
                    "isServing": true,
                },
                {
                    "contestantId": "02",
                    "scores": [
                        {
                            "mainScore": 80,
                        },
                    ],
                    "isWinner": true
                }
            ],
            "order": 1,
        },
```

* Adapted `getNationalityHTML` to display school's logo instead of flag


```
        "00": {
            "entryStatus": "1",
            "players": [
                {
                    "title": "Auburn",
                    "logo": "Auburn",
                }
            ]
        },
```

## Getting Started

1. Install NPM Packages

```
npm install
```

2. Start with Vite

```
npm run dev
```