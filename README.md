# Description

Application to test [Express.js] with Zurb Foundation 6 support.

### Dependencies

    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "hbs": "~3.1.0",
    "morgan": "~1.6.1",
    "pm2": "^1.0.1",
    "serve-favicon": "~2.3.0"

### Dev Dependencies

    "browser-sync": "^2.11.1",
    "foundation-sites": "^6.1.2",
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.0",
    "gulp-cssnano": "^2.1.1",
    "gulp-sass": "^2.2.0",
    "gulp-uglify": "^1.5.2",
    "npm-run-all": "^1.5.1"

## Npm scripts

#### gulp
    $ ./node_modules/.bin/gulp

#### start
    $ ./node_modules/.bin/pm2 restart bin/www

#### start-dev
    $ ./node_modules/.bin/npm-run-all -p start gulp

#### stop
    $ ./node_modules/.bin/pm2 stop bin/www

#### status
    $ ./node_modules/.bin/pm2 monit

## Gulp tasks

    $ gulp styles
    $ gulp scripts
    $ gulp build

> Default task, needs a node server running.

    $ gulp server

## Author
This source code is written by [Julio Antúnez Tarín].

[Julio Antúnez Tarín]: http://twitter.com/jatap
[Express.js]: http://expressjs.com

