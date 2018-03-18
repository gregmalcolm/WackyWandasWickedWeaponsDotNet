Wacky Wanda’s Wicked Weapons .NET Flavor
========================================

This is a simple ES6 frontend used for demo purposes for the talk
“Chrome Developer Tools: Raiding the Armory”

This version has been ported into a ASP.NET Core environment.

Speakerdeck:

https://speakerdeck.com/gregmalcolm/chrome-dev-tools-raiding-the-armory

Although this project has C# backend, it still makes  makes use of a separate api project:

https://github.com/gregmalcolm/wacky-wandas-wicked-weapons-api

There are 2 important branches:

#### Branch: fix-it 

The code in a purposefully “broken” state

Note: This branch is subject to rebasings from solutions branch whenever
something changes.

#### Branch: solution

The code with all corrections in place

Setup
-----

Install  npm dependencies:
```
npm install

```

Either start from Visual Studio or VSCode or from the command line like this:

```
VSTEST_HOST_DEBUG=1 ASPNETCORE_ENVIRONMENT=Development dotnet run
```
