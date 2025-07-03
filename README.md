# To create new project
```console
git clone <REPO_URL> <DIR>
cd <DIR>/
```

# Create database and user:
```console
CREATE DATABASE wordpress_db;
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'%' IDENTIFIED BY 'userpass';
FLUSH PRIVILEGES;

# Import SQL-dump
```console
gunzip < wordpress.sql.gzip | mariadb-dump -uwordpress_user -p wordpress_db
```
# Update .env

# Install WordPress and plugins
```console
composer install
```
# To install a plugin, use this format:
```console
composer require "wpackagist-plugin/the-events-calendar:*"
```
# To install a theme, use this format:
```console
composer require "wpackagist-theme/:"
```
