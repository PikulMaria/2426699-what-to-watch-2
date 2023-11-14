export interface Film {
    id: number;
    title: string;
    genre: string;
    score: number;
    releaseDate: number;
    poster: string;
    description: string;
    director: string;
    starring: string;
    video: string;
}

const films: Film[] = [
    { 
        id: 1,
        title: 'Fantastic Beasts: The Crimes of Grindelwald',
        genre: 'Adventure, Family, Fantasy',
        score: 8.9,
        releaseDate: 2018,
        poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
        description: 'In an effort to thwart Grindelwald\'s plans, Albus Dumbledore enlists his former student Newt Scamander...',
        director: 'David Yates',
        starring: 'Eddie Redmayne, Katherine Waterston, Johnny Depp, Jude Law, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 2,
        title: 'Bohemian Rhapsody',
        genre: 'Biography, Drama, Music',
        releaseDate: 2018,
        score: 8.9,
        poster: 'img/bohemian-rhapsody.jpg',
        description: 'The story of the legendary rock band Queen and lead singer Freddie Mercury...',
        director: 'Bryan Singer',
        starring: 'Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 3,
        title: 'Macbeth',
        genre: 'Drama, History, War',
        releaseDate: 2015,
        score: 8.9,
        poster: 'img/macbeth.jpg',
        description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland...',
        director: 'Justin Kurzel',
        starring: 'Michael Fassbender, Marion Cotillard, Paddy Considine, Sean Harris, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 4,
        title: 'Aviator',
        genre: 'Biography, Drama',
        releaseDate: 2004,
        score: 8.9,
        poster: 'img/aviator.jpg',
        description: 'A biopic depicting the early years of legendary director and aviator Howard Hughes\' career...',
        director: 'Martin Scorsese',
        starring: 'Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale, John C. Reilly, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 5,
        title: 'We Need to Talk About Kevin',
        genre: 'Drama, Mystery, Thriller',
        releaseDate: 2011,
        score: 8.9,
        poster: 'img/we-need-to-talk-about-kevin.jpg',
        description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up...',
        director: 'Lynne Ramsay',
        starring: 'Tilda Swinton, John C. Reilly, Ezra Miller, Jasper Newell, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 6,
        title: 'What We Do in the Shadows',
        genre: 'Comedy, Horror',
        releaseDate: 2014,
        score: 8.9,
        poster: 'img/what-we-do-in-the-shadows.jpg',
        description: 'A documentary team films the lives of a group of vampires living in the modern day...',
        director: 'Jemaine Clement, Taika Waititi',
        starring: 'Jemaine Clement, Taika Waititi, Jonathan Brugh, Cori Gonzalez-Macuer, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 7,
        title: 'Revenant',
        genre: 'Adventure, Drama, Thriller',
        releaseDate: 2015,
        score: 8.9,
        poster: 'img/revenant.jpg',
        description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival...',
        director: 'Alejandro González Iñárritu',
        starring: 'Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 8,
        title: 'Johnny English',
        genre: 'Action, Adventure, Comedy',
        releaseDate: 2003,
        score: 8.9,
        poster: 'img/johnny-english.jpg',
        description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy...',
        director: 'Peter Howitt',
        starring: 'Rowan Atkinson, John Malkovich, Natalie Imbruglia, Tasha de Vasconcelos, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 9,
        title: 'Shutter Island',
        genre: 'Mystery, Thriller',
        releaseDate: 2010,
        score: 8.9,
        poster: 'img/shutter-island.jpg',
        description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane...',
        director: 'Martin Scorsese',
        starring: 'Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo, Ben Kingsley, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 10,
        title: 'Pulp Fiction',
        genre: 'Crime, Drama',
        releaseDate: 1994,
        score: 8.9,
        poster: 'img/pulp-fiction.jpg',
        description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption...',
        director: 'Quentin Tarantino',
        starring: 'John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 11,
        title: 'No Country for Old Men',
        genre: 'Crime, Drama, Thriller',
        releaseDate: 2007,
        score: 8.9,
        poster: 'img/no-country-for-old-men.jpg',
        description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande...',
        director: 'Ethan Coen, Joel Coen',
        starring: 'Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 12,
        title: 'Snatch',
        genre: 'Comedy, Crime',
        releaseDate: 2000,
        score: 8.9,
        poster: 'img/snatch.jpg',
        description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond...',
        director: 'Guy Ritchie',
        starring: 'Jason Statham, Brad Pitt, Benicio Del Toro, Dennis Farina, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 13,
        title: 'Moonrise Kingdom',
        genre: 'Adventure, Comedy, Drama',
        releaseDate: 2012,
        score: 8.9,
        poster: 'img/moonrise-kingdom.jpg',
        description: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them...',
        director: 'Wes Anderson',
        starring: 'Jared Gilman, Kara Hayward, Bruce Willis, Bill Murray, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 14,
        title: 'Seven Years in Tibet',
        genre: 'Adventure, Biography, Drama',
        releaseDate: 1997,
        score: 8.9,
        poster: 'img/seven-years-in-tibet.jpg',
        description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China\'s takeover of Tibet...',
        director: 'Jean-Jacques Annaud',
        starring: 'Brad Pitt, David Thewlis, BD Wong, Mako, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 15,
        title: 'Midnight Special',
        genre: 'Drama, Mystery, Sci-Fi',
        releaseDate: 2016,
        score: 8.9,
        poster: 'img/midnight-special.jpg',
        description: 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers...',
        director: 'Jeff Nichols',
        starring: 'Michael Shannon, Joel Edgerton, Kirsten Dunst, Adam Driver, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 16,
        title: 'War of the Worlds',
        genre: 'Adventure, Sci-Fi, Thriller',
        releaseDate: 2005,
        score: 8.9,
        poster: 'img/war-of-the-worlds.jpg',
        description: 'As Earth is invaded by alien tripod fighting machines, one family fights for survival...',
        director: 'Steven Spielberg',
        starring: 'Tom Cruise, Dakota Fanning, Tim Robbins, Miranda Otto, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 17,
        title: 'The Darjeeling Limited',
        genre: 'Adventure, Comedy, Drama',
        releaseDate: 2007,
        score: 8.9,
        poster: 'img/dardjeeling-limited.jpg',
        description: 'A releaseDate after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other...',
        director: 'Wes Anderson',
        starring: 'Owen Wilson, Adrien Brody, Jason Schwartzman, Amara Karan, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 18,
        title: 'Orlando',
        genre: 'Biography, Drama, Fantasy',
        releaseDate: 1992,
        score: 8.9,
        poster: 'img/orlando.jpg',
        description: 'After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world...',
        director: 'Sally Potter',
        starring: 'Tilda Swinton, Billy Zane, Quentin Crisp, Charlotte Valandrey, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 19,
        title: 'Mindhunter',
        genre: 'Crime, Drama, Thriller',
        releaseDate: 2017,
        score: 8.9,
        poster: 'img/mindhunter.jpg',
        description: 'In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.',
        director: 'Joe Penhall',
        starring: 'Jonathan Groff, Holt McCallany, Anna Torv, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
    {
        id: 20,
        title: 'Midnight Special',
        genre: 'Drama, Mystery, Sci-Fi',
        releaseDate: 2016,
        score: 8.9,
        poster: 'img/midnight-special.jpg',
        description: 'A father and son go on the run after the dad learns his child possesses special powers.',
        director: 'Jeff Nichols',
        starring: 'Michael Shannon, Joel Edgerton, Kirsten Dunst, Adam Driver, and others',
        video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    },
];

export default films;
