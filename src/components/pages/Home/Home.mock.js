const homeMock = {
    links: [
        {text: 'Servicios', className: 'nav-link text-primary', url: 'http://www.google.com'},
        {text: 'Acerca de', className: 'nav-link text-danger', url: 'http://www.google.com'},
        {text: 'Contacto', className: 'nav-link text-success', url: 'http://www.google.com'}
    ],
    feeds: [
        {
            blogs: [
                {
                    title: '6 video juegos de terror que no dejarás de jugar',
                    date: new Date(),
                    image: {
                        src: 'https://cdn02.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_outlastbundleofterror/NSwitchDS_OutlastBundleOfTerror_06.jpg',
                        alt: 'Outlast',
                    },
                    category: 'Video juegos'
                },
                {
                    title: 'Bornout 3: El mejor video juego de carreras',
                    date: new Date(),
                    image: {
                        src: 'https://wallpaperstock.net/wallpapers/thumbs1/18474.jpg',
                        alt: 'burnout3',
                    },
                    category: 'Video juegos'
                },
                {
                    title: 'Historia de los video juegos',
                    date: new Date(),
                    image: {
                        src: 'https://www.fib.upc.edu/retro-informatica/historia/videojocs/mainColumnParagraphs/0/image/oxo.jpg',
                        alt: 'history',
                    },
                    category: 'Video juegos'
                },
            ],
            category: 'Video juegos'
        },
        {
            blogs: [
                {
                    title: 'El mejor show del medio tiempo',
                    date: new Date(),
                    image: {
                        src: 'https://i.ytimg.com/vi/CHWRqiljo8M/hqdefault.jpg',
                        alt: 'KatyPerry',
                    },
                    category: 'Música'
                },
                {
                    title: 'Michael Jackson: El mejor artista de todos los tiempos',
                    date: new Date(),
                    image: {
                        src: 'https://s1.eestatic.com/2019/06/28/reportajes/Reportajes_409721607_126765188_1024x576.jpg',
                        alt: 'MichaelJackson',
                    },
                    category: 'Música'
                },
                {
                    title: 'The Beatles: Ascenso y Caída',
                    date: new Date(),
                    image: {
                        src: 'https://lh3.googleusercontent.com/proxy/HSJv1oxnj3GXM3btfWGwfqC0SQdI7EARq9deNZWgeFxpSsR2QxtVvIFgdj7CqgF5ctN2RXdhvEljrx_0bz-b-UPtKeR7-qTNUMZ4GZqsF3ecGublwOV8skqfzFIvyytFZGo6G6-I83fmY7_dx0GSZq8LxHgErLRIG7eQeSHpUS4pYZg4ig78C5jUSaONkQY',
                        alt: 'Beatles',
                    },
                    category: 'Música'
                },
            ],
            category: 'Música'
        },
        {
            blogs: [
                {
                    title: 'Segunda temporada de Demon Slayer estrenará más pronto de lo esperado',
                    date: new Date(),
                    image: {
                        src: 'https://laverdadnoticias.com/__export/1570233352861/sites/laverdad/img/2019/10/04/demonslayer_anime.jpg_793492074.jpg',
                        alt: 'DemonSlayer',
                    },
                    category: 'Anime'
                },
                {
                    title: 'Puedes leer la continuación de Death Note gratis online',
                    date: new Date(),
                    image: {
                        src: 'https://cdn.cinemascomics.com/wp-content/uploads/2020/02/continuacion-death-note-gratis-online.jpg',
                        alt: 'DeathNote',
                    },
                    category: 'Anime'
                },
                {
                    title: '¿Qué sabemos de los titanes hasta ahora?',
                    date: new Date(),
                    image: {
                        src: 'https://spoilertime.com/wp-content/uploads/2019/05/attack-on-titan-1-2-780x451.jpg',
                        alt: 'AoT',
                    },
                    category: 'Anime'
                },
            ],
            category: 'Anime'
        }
    ]
}

export {
    homeMock
}