# Githuso

A simple tool to help Github users create a new repository from the Command Line Interface (CLI).

### Background

Githuso = Git + thuso. "Thuso" is a seSotho (one of 11 official languages in South Africa) word that translates to "help" in English.

### Installation and Usage

You can use npm to download githuso:

```
npm install -g githuso
```

Giving githuso your username and repo name, it will return cURL script to run on command line to create a new Github repository. That way, you do not have to move away from your terminal, while initiating git, to create a new repo.

```
githuso -u goodmanluphondo -r newrepo
```

The command above will return somthing like:

```
curl -u 'goodmanluphondo' https://api.github.com/user/repos -d '{"name":"newrepo"}'
```