FROM node:22-alpine
WORKDIR /codegen
COPY package*.json ./
RUN npm ci
COPY buf.gen.yaml watch.sh ./
ENV PATH="/codegen/node_modules/.bin:${PATH}"
CMD ["buf", "generate", "/proto", "--template", "/codegen/buf.gen.yaml"]
