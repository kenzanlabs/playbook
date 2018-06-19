FROM node:10

ARG sha_commit
ARG owner
ARG repo


RUN echo "SHA_COMMIT: $sha_commit"

#DEPENDENCIES
RUN npm install -g serve
RUN serve -v
RUN npm -v

#COPY PROJECT
ADD ./ /playbook

#TESTS
RUN cd /playbook && \
   . ./.env && \
   rm ./.env && \
   sh ./build.sh  $owner $repo $sha_commit


#BUILD
RUN cd /playbook && npm run-script build



## ENTRY / EXPOS
ENTRYPOINT ["serve","-l","3000","-s","/playbook/build"]
EXPOSE 3000
