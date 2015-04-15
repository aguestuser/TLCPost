// submit via POST to [dev].thelearningcollective.nyc/wp-json/posts

var samplePost = {
  "data": {
  "title": "hello world",
  "content_raw": "Some stuff with #stuff * in * it",
  "excerpt": "less stuff (if you want)", // optional
  "terms": { "category": { ID: 1 } } // must be a category of type below
  }
};

var categories = {
  "check-ins": 1,
  "blog": 2,
  "resource": 3,
  "notes": 4,
  "projects": 5
};
