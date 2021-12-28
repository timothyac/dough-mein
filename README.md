# Dough Mein

> A statically generated domain placeholder example using Next.js

## Demo

### [https://dough-mein.vercel.app/](https://dough-mein.vercel.app/)

## Deploy your own

Easily deploy your own version with Vercel. It will prompt you to set your enviroment variables which can also be found below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimothyac%2Fdough-mein&env=NEXT_PUBLIC_SITE_NAME,NEXT_PUBLIC_PRIMARY_COLOR,NEXT_PUBLIC_SECONDARY_COLOR,NEXT_PUBLIC_ACCENT_COLOR,NEXT_PUBLIC_SUBTEXT&envDescription=The%20only%20required%20enviroment%20variable%20is%20the%20first%20one%2C%20NEXT_PUBLIC_SITE_NAME.%20This%20variable%20changes%20the%20title%20of%20the%20site%20and%20the%20main%20heading.&envLink=https%3A%2F%2Fgithub.com%2Ftimothyac%2Fdough-mein%23set-up-environment-variables)

## How to use

Deploying with the vercel button is super easy. Alternatively you can clone this repo and manage it yourself.

```bash
# clone repo
git clone https://github.com/timothyac/dough-mein.git

# open directory
cd dough-mein

# Install deps
npm run install

# start local server
npm run dev
```

### Set up environment variables

If you are cloning this, you will want to create an `env.local` for development. This is where you can quickly change the site name and colors. In the repository, there is an example provided `env.local.example`.

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_SITE_NAME=...
NEXT_PUBLIC_PRIMARY_COLOR=...
NEXT_PUBLIC_SECONDARY_COLOR=...
NEXT_PUBLIC_ACCENT_COLOR=...
NEXT_PUBLIC_SUBTEXT=...
```

- NEXT_PUBLIC_SITE_NAME: _required_ Title of the site and main header.
- NEXT_PUBLIC_PRIMARY_COLOR: Font color of the site.
- NEXT_PUBLIC_SECONDARY_COLOR: Background color of the site.
- NEXT_PUBLIC_ACCENT_COLOR: Link color of the site.
- NEXT_PUBLIC_SUBTEXT: Text under heading.
