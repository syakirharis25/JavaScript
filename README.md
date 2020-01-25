# JavaScript
My works related to JavaScript programming language.

## Table of Contents
1. [Introduction.](#introduction)
2. [JavaScript official websites.](#reference)
3. [JavaScript console.](#console)
4. [JavaScript Object Notation (JSON)](#json)
5. [Difference of =, == and === in JavaScript](#assignment)
6. [GitHub notes.](#github)

<a name="introduction"></a>
## Introduction
<img src="javascript.jpg" height="150">

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript is a high-level, interpreted language that can easily be embedded with languages like HTML. It was developed by Netscape Communications Corporation, Mozilla Foundation, and ECMA International. Brendan Eich is known as the creator or designer of the JavaScript programming language.

<a name="reference"></a>
## JavaScript official websites.
JavaScript was created by Brendan Eich : https://github.com/BrendanEich <br />
Sublime Text editor official website : https://www.sublimetext.com <br />
Sublime Text editor package control : https://packagecontrol.io <br />
Emmet official website : https://emmet.io <br />
Emmet documentation : https://docs.emmet.io <br />

JavaScript Classes by Mozilla : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes <br />
JavaScript Event by Mozilla : https://developer.mozilla.org/en-US/docs/web/api/event <br />
JavaScript Event reference by Mozilla : https://developer.mozilla.org/en-US/docs/web/events <br />
JavaScript EventListener by Mozilla :https://developer.mozilla.org/en-US/docs/Web/API/EventListener <br />
JavaScript const by Mozilla : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const <br />
JavaScript Element.innerHTML by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML <br />
JavaScript HTMLCollection by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection <br />
JavaScript Document.querySelector() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector <br />
JavaScript Math by Mozilla : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math <br />
JavaScript MouseEvent by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent <br />
JavaScript Element.setAttribute() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute <br />
JavaScript WindowOrWorkerGlobalScope.setInterval() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval <br />
JavaScript WindowOrWorkerGlobalScope.clearInterval() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval <br />

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
