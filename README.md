# Api.Recon.Dev Subdomain Extractor

A simple Node.js script that extracts subdomains for a specified domain from https://recon.dev API by [@nahamsec](https://twitter.com/NahamSec) & [@Static-Flow](https://twitter.com/_StaticFlow_). You will need to get an API key, you can get one here https://recon.dev/login?screen_hint=signup.

## Install
```
export API_RECON_DEV=<API-KEY>
npm install
```

## How to use
#### Output result in an array
```
node main.js github.com
```

#### Output
```
[
  '*.github.com',
  '*.registry.github.com',
  'api.github.com',
  'classroom.github.com',
  'import2.github.com',
  'importer2.github.com',
  'porter2.github.com',
  'registry.github.com',
  'render-lab.github.com',
  'render.github.com',
  'uploads.github.com',
  'www.github.com'
]
```
#### Output result as text
```
node main.js github.com --text
```
#### Output
```
*.github.com
*.registry.github.com
api.github.com
classroom.github.com
import2.github.com
importer2.github.com
porter2.github.com
registry.github.com
render.github.com
render-lab.github.com
uploads.github.com
www.github.com
```

## Contributions
Always looking for contributions.
