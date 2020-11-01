#!/usr/bin/env node
const fetch = require("node-fetch");
const yargs = require("yargs");

const options = yargs
.usage("Usage: -u <username> -r <repo>")
.option("u", { alias: "username", describe: "Your Github username", type: "string", demandOption: true })
.option("r", { alias: "repo", describe: "Your repository name", type: "string", demandOption: true})
.argv;

const instruction = `curl -u '${options.username}' https://api.github.com/user/repos -d '{"name":"${options.repo}"}'`;

console.log(instruction);

// const params = new URLSearchParams();
// params.append("name", options.repo);
// (async () => {
//     const response = await fetch(`https://api.github.com/user/repos`, {method: 'POST', body: params});
//     const json = await response.json();

//     if(json.message) {
//         console.log(json.message);
//     } else {
//         console.log(json);
//     }
// })();
