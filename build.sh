export CI=true

npm install

owner=$1
repo=$2
sha_commit=$3

echo "Running build.sh with $1 $2 $3"


if npm run-script lint && npm test -- --coverage ; then
    node src/status.js $owner $repo $sha_commit success
else
    node src/status.js $owner $repo $sha_commit failure && exit 1
fi
