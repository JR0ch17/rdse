const axios = require('axios');
const isValidDomain = require('is-valid-domain')
const hasFlag = require('has-flag');

let domain = process.argv[2];
let subdomains = [];

if (isValidDomain(domain)) {
  axios.get(`https://api.recon.dev/search?domain=${domain}`)
    .then(function (response) {
      response.data.map(subdomain => {
        subdomain.domain = subdomain.domain.replace('https://', '').split(':')[0];
        subdomains.push(subdomain.domain);
      });
      subdomains = [...new Set(subdomains.sort())];
      if (hasFlag('text')) {
        subdomains.forEach(subdomain => {
          console.log(subdomain)
        })
      } else {
        console.log(subdomains);
      }
    })
    .catch(function (error) {
      console.log(`Could not grab subdomains: ${error}`);
    })
    .finally(function () {
    });
} else {
  console.log("Incorrect domain name syntax")
}