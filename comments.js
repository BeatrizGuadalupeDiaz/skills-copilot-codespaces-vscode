// Create web server
const app = express();

// Configure the app (app.set)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount middleware (app.use)
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Mount routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/results', (req, res) => {
  const { title, year, imdbID, poster } = req.body;
  res.render('results', { title, year, imdbID, poster });
});

// Tell the app to listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
