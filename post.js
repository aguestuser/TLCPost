// TYPES:

//Consumer:
/*
 {
   key: String,
   secret: String
 }
 */

//Token
/*
{
 token: String,
 secret: String
}

*/

//Config:
/*
{
 credPath: String,
 tokenPath: String
}
*/

//USAGE

// tlc_post ./myNewPost.md "check-in"


var req = require('request'),
    _ = require('underscore'),
    o = require('oAuthor');

(function main(){
  var file = process.argv[2],
      category = process.argv[3],
      config = {
        credPath: "some/path",
        tokenPath: "some/other/path"
      },
      token = getToken(config), // String
      post = constructPost(file,category); // Post

  return submit(post,token, function(err,res){
    // handle how it went!
    // like:
    // "do you want to see your post? (y/n)"
    // or:
    // display the link
    // make another post? (y/n)
    return {};
  });
})();

// getCred(String) -> Consumer
function getConsumer(credPath){
  // ???
}

// hasToken(Config) -> String | null
function getToken(config){
  fs.read("../../token/", function(err,res){
    if(err){ throw err; }
    else {
      if(res == "no token") {
        return saveToken(getNewToken(config.credPath));
      }
      else return res;
    }
  });
}

// getNewToken(String) -> String
function getNewToken(credPath){
  var consumer = getConsumer(credPath);
  return o.accessToken(o.authorizeToken(o.requestToken()));
}

function saveToken(Token){
  // save it! return it
}

// getConsumer(String) -> Consumer
function getConsumer(credPath){
 // return the thing!
}


//constructPost(String,String) -> Post (we'll write that down)
function constructPost(path,category){
  // read the file
  // parse the title (and handle errors)
  // parse body (maybe translate markdown to html?)
  // return it!
}
