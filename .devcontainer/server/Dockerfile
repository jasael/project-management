FROM node:20.14.0-alpine3.20

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh curl wget

# install pnpm
RUN npm install -g pnpm @nestjs/cli@11.0.5

# install zsh and set as default shell and set up oh-my-zsh
RUN apk add zsh && \
    sed -i -e "s|/bin/sh|/bin/zsh|" /etc/passwd && \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"