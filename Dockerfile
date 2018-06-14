FROM node:10


#DEPENDENCIES
RUN npm install -g serve

#COPY PROJECT
ADD ./ /playbook

#TESTS

RUN export CI=true && \
  cd /playbook && \
  npm install && \
  npm run-script test

#BUILD
RUN cd /playbook && npm run-script build


## ENTRY / EXPOS
ENTRYPOINT ["serve","-s","/playbook/build"]
EXPOSE 3000
