FROM node:10

ARG sha_commit
ARG owner
ARG repo


RUN echo "SHA_COMMIT: $sha_commit"

#DEPENDENCIES
RUN npm install -g serve

#COPY PROJECT
ADD ./ /playbook

#TESTS
RUN export CI=true && \
  cd /playbook && \
  npm install && \
  npm run-script test

#TESTS PASS, CALL COMMIT API TO MARK PASSING build
RUN . /playbook/.env && \
  node /playbook/src/status.js $owner $repo $sha_commit

RUN cd /playbook && rm .env


#BUILD
RUN cd /playbook && npm run-script build


## ENTRY / EXPOS
ENTRYPOINT ["serve","-s","/playbook/build"]
EXPOSE 3000
