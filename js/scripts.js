var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		poster: './images/harrypotter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		poster: './images/krollew.jpg'
	},
	{
		id: 3,
		title: 'Coco',
		desc: 'Bajka o więziach rodzinnych',
		poster: './images/coco.jpg'
	},
	{
		id: 4,
		title: 'Mocna kawa wcale nie jest taka zła',
		desc: 'Film o niełatwym powrocie do swoich korzeni',
		poster: './images/mocnakawa.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	); 

ReactDOM.render(element, document.getElementById('app'));
