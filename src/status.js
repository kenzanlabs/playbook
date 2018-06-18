const GitHub = require('github-api');

const args = process.argv.slice(2);

if (args < 3) {
  console.log('Dude.  Missing the sha-commit!');
  console.log('  - Usage: status.js <sha-commit>');
  throw 'Malformed Input Dr. Spock :( :(';
}

const owner = args[0];
const repo_name = args[1];
const sha_commit = args[2];

const oauthToken = process.env.OAUTH_TOKEN;
// unauthenticated client
const gh = new GitHub({
  token: oauthToken,
});


const repo = gh.getRepo(owner, repo_name);
repo.updateStatus(sha_commit, {
  state: 'success',
  target_url: 'https://example.com/build/status',
  description: 'The build succeeded!',
  context: `gcr.io/kzn-appsruntime-techradar/github-${owner}-${repo_name}`,
}).then((resp) => {
  console.log('%s: %s', resp.status, resp.statusText);
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
