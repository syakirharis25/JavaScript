# JavaScript
My works related to JavaScript programming language.

## Table of Contents
1. [Introduction.](#introduction)
2. [GitHub notes.](#github)

<a name="introduction"></a>
## Introduction

<img src="javascript.jpg" height="200">

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

<a name="github"></a>
## GitHub notes

Initialize repository, adding GitHub remote repository and check the remote repository
```
$ git init
$ git remote add origin https://github.com/syakirharis25/JavaScript.git
$ git remote -v
$ git status
```

Press [Ctrl] + [R] on your keyboard to refresh the GitHub page to see whether the files already added to GitHub or not.

If there is a message said **fatal: refusing to merge unrelated histories**, after git pull origin master command, then do this command.
```
$ git fetch origin master
$ git reset --hard origin/master
$ git pull origin master
$ git push origin master
```
