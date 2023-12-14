FROM php:8.1-fpm

# 必要なパッケージのインストールとDocker PHP Extensionsのインストール
RUN apt-get update && apt-get upgrade -y && \
  apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git unzip && \
  docker-php-ext-configure gd --with-freetype --with-jpeg && \
  docker-php-ext-install gd pdo pdo_mysql && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# Composerのインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Node.jsのインストール
ENV NODE_VERSION=16.14.0
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version
