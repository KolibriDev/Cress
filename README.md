# CreSS v0.7.x [![Dependency Status](https://gemnasium.com/KolibriDev/Cress.png)](https://gemnasium.com/KolibriDev/Cress)

This is our pretty basic front-end framework. It is designed to be used as a base for new projects, not as a full-blown framework like Foundation or Bootstrap. Nonetheless it does include basic styles for the most common elements we use. Some of the form related elements require javascript functionality in order to be styleable, for that you can check out some of our [plugins](https://github.com/KolibriDev), or simply use your own!

This project is still in development, and provided 'as is'. We use it along with [gulp-blender](https://github.com/KolibriDev/gulp-blender) as a base for almost all our front-end-development projects, but **CreSS** can easily be implemented into any setup.

### Contributions

All [pull-requests](https://github.com/KolibriDev/Cress/pulls)/[issues/bug-reports/thoughts](https://github.com/KolibriDev/Cress/issues) are very much appreciated, and encouraged!

## Getting started

Install with [Bower](http://bower.io): `bower install cress`

Clone the Github project: `git clone https://github.com/KolibriDev/Cress.git`

Or [download zip](https://github.com/KolibriDev/Cress/archive/master.zip).

## Docs?

We haven't created proper documentation yet, but here are some basics.

### Structure

We have divided our files into this folder structure.

`base` is for things that aren't exactly basic elements, like `variables`, or are generally not changed very often, if ever, e.g. `functions`, `mixins`, `grid` etc. It also contains general styles for `html`/`body`, as well as paragraphs and headings.

`elements` is for all generic styles that apply to any elements. If styles are extensive, we break them up into partials within a folder, the 'main' file called `base.scss` and the rest whatever applies, e.g. `buttons/base.scss`, `buttons/styles.scss` etc.

`pages` is a necessary evil in the world of custom designs and general weirdness. It is the one folder we avoid at all costs, only to be used for styles specific to a certain page (e.g. `frontpage.scss`) that cannot be generalized with good measure.

`vendor` is for all external styles, like normalize. Ideally these files should not be modified directly, rather injected from [bower components](http://bower.io/) or something similar.

```
src
├── base/
│   └── functions.scss
│   └── general.scss
│   └── grid.scss
│   └── keyframes.scss
│   └── variables.scss
│   └── visibility.scss
│   └── mixins/
        ├── base.scss / etc.
│   └── type/
        ├── base.scss / etc.
├── elements/
│   └── *.scss
│   └── buttons/
        ├── base.scss / etc.
│   └── forms/
        ├── base.scss / etc.
├── pages/
├── vendor/
```

## Build

You can build your own `.css` copy using [gulp](http://gulpjs.com), f.x. if you're using CreSS outside of an environment with scss-compiling capabilities.

This will return a single css file `cress.css`, as well as a minified version, `cress.min.css`.

```shell
$ npm install
$ gulp build
```

## Author

Kolibri is a new company, formed by Form5 and Sprettur, and takes its name from one of the best designed birds of the animal kingdom and a symbol of passion in several cultures. We design and develop enriching business experiences with several amazing clients. To learn more about us, check out [www.kolibri.is](http://www.kolibri.is).

## Contributors

Benedikt Valdez D. Stefánsson (@benediktvaldez)

Ólafur Örn Nielsen (@olafurnielsen)
