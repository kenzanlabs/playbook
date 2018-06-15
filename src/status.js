var GitHub = require('github-api');

var args = process.argv.slice(2);

if(args < 1){
  console.log('Dude.  Missing the sha-commit!');
  console.log('  - Usage: status.js <sha-commit>');
  throw 'Malformed Input Dr. Spock :( :(';
}

var sha_commit = args[0];

var oauthToken = process.env.OAUTH_TOKEN;
// unauthenticated client
const gh = new GitHub({
  token: oauthToken
});


var repo = gh.getRepo('jon077','playbook');
repo.updateStatus(sha_commit, {
  "state": "success",
  "target_url": "https://example.com/build/status",
  "description": "The build succeeded!",
  "context": "gcr.io/kzn-appsruntime-techradar/github-kenzanlabs-playbook"
}).then((resp) => {
  console.log(resp);
}, (error) => {
  console.log(error);
});




// let gist = gh.getGist(); // not a gist yet
// gist.create({
//    public: true,
//    description: 'My first gist',
//    files: {
//       "file1.txt": {
//          content: "Aren't gists great!"
//       }
//    }
// }).then(function({data}) {
//    // Promises!
//    let createdGist = data;
//    return gist.read();
// }).then(function({data}) {
//    let retrievedGist = data;
//    // do interesting things
// });
