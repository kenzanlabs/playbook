const GitHub = require('github-api');

const args = process.argv.slice(2);

if (args < 4) {
  console.log('Dude.  Usage!');
  console.log('  - Usage: status.js <owner> <repo_name> <sha_commit> <build_status>');
  throw 'Malformed Input Dr. Spock :( :(';
}

const owner = args[0];
const repo_name = args[1];
const sha_commit = args[2];
const build_status = args[3];

const oauthToken = process.env.OAUTH_TOKEN;
// unauthenticated client
const gh = new GitHub({
  token: oauthToken,
});


const repo = gh.getRepo(owner, repo_name);
repo.updateStatus(sha_commit, {
  state: build_status,
  target_url: 'https://example.com/build/status',
  description: 'The build: ' + build_status,
  context: `gcr.io/kzn-appsruntime-techradar/github-${owner}-${repo_name}`,
}).then((resp) => {
  console.log('%s %s: %s', build_status, resp.status, resp.statusText);
}, (error) => {
  console.log(error);
});
