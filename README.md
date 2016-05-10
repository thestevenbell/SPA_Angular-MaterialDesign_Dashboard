---
layout: post
title:  "Template for Angular v1, Material Design, scss, Jade and BrowserSync with builds via Gulp for efficent SPA Development."
date:   2016-05-09 12:27:35 -0500
categories: Angular gulp Material scss browerSync Jade
---

# SPA_Angular-MaterialDesign_Template

## [Project Repo](https://github.com/thestevenbell/SPA_Angular-MaterialDesign_Dashboard.git)

### Project Description
Dashboard lifehack with CNN news headline service.  Practice buiding a SPA with Angular routing and consuming API's.
Gulp, Jade, SASS and BrowserSync are powerful tools to make web development easier and more efficient.


### Tech Tools:
- Angular v1
- Jade
- Material Design for Angular v1
- Scss
- BrowserSync
- Node

## STILL TO DO:
- fix ng-repeat issue on menu

### Directions for use:

- Assumes Mac dev environment, Ruby, NodeJS and Git installed
- clone or copy this repo into working folder
- run the following in bash:

    $ `npm install --global gulp-cli`         <-- installs gulp-cli globally

    $ `npm install --global gulp` <-- installs gulp globally

    $ `gem install sass`   # or `gem update sass` if you have sass already
    > | Note: this is a Ruby gem

    $ `git clone https://github.com/thestevenbell/SPA_Angular-MaterialDesign_Template.git`

    $ `cd SPA_Angular-MaterialDesign_Template`

    $ `npm install`  <-- installs the file dependencies included in the package.json file

    $ `gulp serve` <-- use this command to start gulp services.  This will automatically
    open your server at localhost and precompile SASS and Jade assets on save allowing for
    instantaneous in-browser views of updates.


- The following modules were included in this repo:

    $ `npm install --save-dev gulp`

    $ `npm install --save-dev gulp-sass`

    $ `npm install --save-dev gulp-jade`

    $ `npm install --save-dev gulp-util`

    $ `npm install --save-dev gulp-load-plugins`

    $ `npm install --save-dev browser-sync`


### Directory Structure and File Explanation:
> NOTE: This section is in progress as file structure takes shape
    website/  <-- the main working directory, name this whatevs you would like
    .sas-cache  <-- auto generated by gulp, don't touch, not used directly by developer
    /img  <-- includes custom favicons.  replase these with your own but be sure to keep the names the same

### Automation
- Gulp is set up to automate the precomplitation of resources and open the browser with
browsersync.  Simply input $ `gulp` in the command line.
- If you do not want to open the browser to use BrowserSync it is possible to
initiate only the precompilers independently.
 - To precompile SASS use $ `gulp styles`
 - To precompile Jade use $ `gulp jade`
 - To only run the server $ `gulp serve`

### Some resourses:

- [getting-started-with-gulp-and-sass](http://ryanchristiani.com/getting-started-with-gulp-and-sass/)
- [Gulp's GitHub Repo](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Using Jade with Gulp](http://codepen.io/mgmarlow/post/using-jade-with-gulp)
- [Setting Up Glup with Jade, Coffee and Sass/Scss](https://www.codementor.io/development-process/tutorial/how-to-set-up-gulp-beginner-guide)
- [LiveReload - sparse directions :frown: ](https://www.npmjs.com/package/livereload)

##### [Made by Steven Bell](http://thestevenbell.github.io/) MIT licence. share it, use it, be merry


