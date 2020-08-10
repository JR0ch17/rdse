const axios = require('axios');
const isValidDomain = require('is-valid-domain')

let domain = process.argv[2];
let subdomains = [];

if (isValidDomain(domain) || isValidDomain(subdomain)) {
  axios.get(`https://api.recon.dev/search?domain=${domain}`)
    .then(function (response) {
      response.data.map(subdomain => {
        subdomain.domain = subdomain.domain.replace('https://', '').split(':')[0];
        subdomains.push(subdomain.domain);
      });
      subdomains = [...new Set(subdomains)];
      console.log(subdomains.sort());
    })
    .catch(function (error) {
      console.log(`Could not grab subdomains: ${error}`);
    })
    .finally(function () {
    });
} else {
  console.log("Incorrect domain name syntax")
}