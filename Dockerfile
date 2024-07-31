# ________________________________________________________________
# BUILD FRONTEND APPLICATION DOKCER IMAGE (TAG: DEVELOPMENT)
# ________________________________________________________________
FROM node:22-alpine3.19
WORKDIR /web
COPY app/web/package*.json .
RUN npm install
COPY app/web .
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
