# JavaScript
My works related to JavaScript programming language.

## Table of Contents
1. [Introduction.](#introduction)
2. [JavaScript console.](#console)
3. [JavaScript Object Notation (JSON)](#json)
4. [Difference of =, == and === in JavaScript](#assignment)
5. [GitHub notes.](#github)

<a name="introduction"></a>
## Introduction
<img src="javascript.jpg" height="150">

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript is a high-level, interpreted language that can easily be embedded with languages like HTML. It was developed by Netscape Communications Corporation, Mozilla Foundation, and ECMA International. Brendan Eich is known as the creator or designer of the JavaScript programming language.

JavaScript is a creation of Brendan Eich : https://github.com/BrendanEich

<a name="console"></a>
## JavaScript console
The console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

The console object can be accessed from any global object. Window on browsing scopes and WorkerGlobalScope as specific variants in workers via the property console. It's exposed as Window.console, and can be referenced as simply console.

Reference : https://developer.mozilla.org/en-US/docs/Web/API/console

<a name="json"></a>
## JavaScript Object Notation (JSON)
JavaScript Object Notation (JSON) is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format, with a diverse range of applications, such as serving as replacement for XML in AJAX systems.

JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. The official Internet media type for JSON is application/json. JSON filenames use the extension .json.

To check the appropriate JSON format : https://www.freeformatter.com/json-formatter.html

<a name="assignment"></a>
## Difference of =, == and === in JavaScript
**=** is used for assigning values to a variable in JavaScript. <br />
**==** is used for comparison between two variables irrespective of the datatype of variable. <br />
**===** is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values.

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
$ git status
```
