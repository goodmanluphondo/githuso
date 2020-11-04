#!/usr/bin/env node
const fetch = require("node-fetch");
const yargs = require("yargs");

const options = yargs
.usage("Usage: -u <username> -r <repo> --origin")
.option("u", { alias: "username", describe: "Github username", type: "string", demandOption: true })
.option("r", { alias: "repo", describe: "Your repository name", type: "string", demandOption: true })
.option("o", { alias: "origin", demandOption: false })
.argv;

let instruction = "";

if( options.origin ){
    instruction = `git remote add origin git@github.com:${options.username}/${options.repo}.git`;
} else {
    instruction = `curl -u '${options.username}' https://api.github.com/user/repos -d '{"name":"${options.repo}"}'`;
}

console.log(instruction);
