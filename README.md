# Jekyll Seed

A starting frame for a Jekyll site.

[Jekyll documentation is here.](https://jekyllrb.com/)

<hr>

## Dependencies

**If you're on a Mac**: Run the `install-script.sh` to install NPM dependencies, Jekyll, and Sass. This will also check to make sure you have Homebrew, Ruby, and Node installed as well, and if not, will download them for you.

**If you're on a Windows or Linux computer**: please be sure to have Ruby, Rubygems, Jekyll and Sass gems, Node, npm, and Grunt installed. The `install-script.sh` will not work for you.

<hr>

## Getting started

Run `jekyll server` to serve locally.

In a separate terminal tab/window, run `grunt watch` to watch for changes in `assets/development/stylesheets` and compile your Sass files into CSS, the result of which is your styles end up in `assets/production/main.css.min` and included in your site's `head` tag.

<hr>

## Includes:

* File tree with `_data/`, `_includes/`, `_layouts/`, `_posts/`, `_static/`, `assets/`, `category/`, and `tag/` subfolders.
* Asset setup with Sass. Grunt setup for managing assets.
* Initial categories and tags structures, and corresponding layouts.
* Includes `_includes/klipse.html` script, to use with embedding runnable code (!!) directly in your site pages or posts. Check out [klipse](https://github.com/viebel/klipse) for more information.

<hr>

## Assets

Assets are broken  down into two folders, `production/` and `development/`, to allow you to differentiate between normal and uglified JavaScript, your Sass files vs your compiled and minified CSS files, your original images vs the resized final images.

That way you can link all assets as coming from the `production/` folder after running the appropriate Grunt script to update the contents of your `production/` folder based on files/changes made to `development/` folder contents.

Also included with assets:
* FontAwesome files.
* `_includes/icon-github.html` and `_includes/icon-twitter.html` icons.

### Adding new assets

Add new Sass files to `assets/development/stylesheets` and import them into the main Sass file.

Add new images to `assets/development/images`, then run `grunt` (or `grunt resize`) to make a copy of your newly added image, resize it, and place it into `assets/production/images` for you.

Add new JavaScript files to `assets/development/javascript`, then run `grunt` (or `grunt uglify`) to make a copy of your new JS files, compress/uglify it, and place it into `assets/production/javascript` for you.

<hr>

## Tags and Categories

To view your current tags and categories, review the files in `_data/`.

Each tag needs to have its own slug, name, and description, as well as its own file in `tag/` folder.

The file needs to specify its frontmatter, such as:

```
layout: post-by-tag
tag: [your-tag-slug]
permalink: /tag/[your-tag-slug]/
```

Same concept with categories.

<hr>

## Additional static pages

Add static pages to `_static/`, specifying frontmatter in each page. Example:

```
layout: page
link-title: About
page-title: About site and author
permalink: /static/about/
```
