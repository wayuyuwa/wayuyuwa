import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_PATH = path.resolve(`${__dirname}/..`);

import fs from "fs";
import https from "https";
import settings from "../data/settings.js";
// Configure your username in settings.js
const REPOS_CACHE_FILE = path.join(BASE_PATH, "data", "repos-cache.json");

// Load existing repos from cache
let repos = [];
try {
    const existingData = fs.readFileSync(REPOS_CACHE_FILE, 'utf-8');
    repos = JSON.parse(existingData);
    console.log(`-> Loaded ${repos.length} existing repos from cache`);
} catch (error) {
    console.log('-> No existing cache found, starting fresh');
}

for (let username of settings.usernames) {
    const REPOS_URL = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`;

    // Fetch the repos from the github API
    https.get(REPOS_URL, { headers: { 'User-Agent': 'Node.js' } }, res => {
        let data = '';
        
        res.on('data', chunk => {
            data += chunk;
        });
        
        res.on('end', async () => {
            const repos_data = JSON.parse(data);
            console.log("-> Username : " + username);
            console.log("-> Include Forks : " + settings.show_forks);
            console.log(`-> Found ${repos_data.length} repos!`);

            for (let repo of repos_data) {
                // Ignore the repo if it is a fork or if it is excluded by /data/settings.js
                if (
                    (repo.fork && !settings.show_forks) ||
                    settings.exclude.includes(repo.name)
                )
                    continue;

                let image = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;

                const repoData = {
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    fork: repo.fork,
                    image: image,
                    technologies: [],
                    highlights: [],
                    show: true,
                };

                // Find existing repo by url
                const existingIndex = repos.findIndex(r => r.url === repo.html_url);
                if (existingIndex === -1) {
                    // Add new repo
                    repos.push(repoData);
                    console.log(`-> Added: ${repo.name}`);
                }
                else {
                    repos[existingIndex].image = image;
                }
            }

            // Save the repos to the cache file
            fs.writeFileSync(REPOS_CACHE_FILE, JSON.stringify(repos, null, 2), {
                flag: "w+",
                overwrite: true
            });
            console.log("-> Saved to cache file.\n");
        });
    }).on('error', err => {
        console.error('Error fetching repos:', err.message);
    });
}