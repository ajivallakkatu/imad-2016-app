var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one': {
  title: 'Article One of Aji',
  heading: 'Article One',
  date: '23 Sep 2016',
  content:`
        <p>  <!--paragraph-->
            This is the content for my first article I am going to do. This is the content for my first article I am going to do. This is the content for my first article I am going to do.
        </p>
         <p>
         This is the content for my first article I am going to do. This is the content for my first article I am going to do. This is the content for my first article I am going to do.
        </p>
         <p>
            This is the content for my first article I am going to do. This is the content for my first article I am going to do. This is the content for my first article I am going to do.
        </p>`
},
 'article-two': {
     title: 'Article Two of Aji',
  heading: 'Article Two',
  date: '25 Sep 2016',
  content:`
        <p>  <!--paragraph-->
            This is the content for my Second article I am going to do. This is the content for my II article I am going to do. This is the content for my II article I am going to do.
        </p>
         <p>
         This is the content for my II article I am going to do. This is the content for my II article I am going to do. This is the content for my first article I am going to do.
        </p>
         <p>
            This is the content for my first article I am going to do. This is the content for my first article I am going to do. This is the content for my first article I am going to do.
        </p>`
},
 'article-three' : {
     title: 'Article III of Aji',
  heading: 'Article III ',
  date: '29 Sep 2016',
  content:`
        <p>  <!--paragraph-->
            This is the content for my III article I am going to do. This is the content for my III article I am going to do. This is the content for my III article I am going to do.
        </p>
         <p>
         This is the content for my III article I am going to do. This is the content for my first article I am going to do. This is the content for my first article I am going to do.
        </p>
         <p>
            This is the content for my III article I am going to do. This is the content for my first article I am going to do. This is the content for my first article I am going to do.
        </p>`
},
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content =data.content;
var htmlTemplate = `
<html>
    <head>
      <title> 
      ${title}
      </title> 
      <meta name="viewport" content="width=device-width, initial-scale=1 "/> <!--for mobile view-->
        <link href="/ui/style.css" rel="stylesheet" />
     </head>
     
    <body>
      <div class ="container">
        <div>
            <a href="/">Home</a> <!--link to home page-->
        </div>
        <hr/> <!--horozontal line-->
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div> <!--section-->
         ${content}
        </div>
      </div>
    </body>
</html>
`
;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    // articleName = article-one
    //articles[articleName]= content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/ajiA.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ajiA.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
