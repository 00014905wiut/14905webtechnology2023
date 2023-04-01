const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [];

app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.post('/create-post', (req, res) => {
  const { title, content } = req.body;


  if (!title || !content) {
    return res.status(400).send('Please provide both title and content.');
  }

  posts.push({ title, content, rating: 0 });
  savePostsToFile();
  res.redirect('/');
});

app.get('/edit-post/:id', (req, res) => {
  const { id } = req.params;
  const post = posts[id];


  if (!post) {
    return res.status(404).send('Post not found.');
  }

  res.render('edit-post', { post, postIndex: id });
});

app.post('/edit-post/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = posts[id];

  if (!post) {
    return res.status(404).send('Post not found.');
  }

  
  if (!title || !content) {
    return res.status(400).send('Please provide both title and content.');
  }

  posts[id] = { title, content, rating: post.rating };
  savePostsToFile();
  res.redirect('/');
});

app.get('/rate-post/:id', (req, res) => {
  const { id } = req.params;
  const post = posts[id];

  if (!post) {
    return res.status(404).send('Post not found.');
  }

  res.render('rate-post', { post, postIndex: id });
});

app.post('/rate-post/:id', (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  const post = posts[id];


  if (!post) {
    return res.status(404).send('Post not found.');
  }

  
  if (!rating || isNaN(parseInt(rating))) {
    return res.status(400).send('Rating must be done using numbers only');
  }

  posts[id].rating = parseInt(rating);
  savePostsToFile();
  res.redirect('/');
});

app.post('/delete-post/:id', (req, res) => {
  const { id } = req.params;
  const post = posts[id];

 
  if (!post) {
    return res.status(404).send('Post not found.');
  }

  posts.splice(id, 1);
  savePostsToFile();
  res.redirect('/');
});

function savePostsToFile() {
  fs.writeFile('posts.json', JSON.stringify(posts), (err) => {
    if (err) throw err;
    console.log('Post saved');
  });
}

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
