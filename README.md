# Dough Mein

> A statically generated domain placeholder example using Next.js

## Demo

### [https://dough-mein.vercel.app/](https://https://dough-mein.vercel.app/)

## Deploy your own

Easily deploy your own version with Vercel. It will prompt you to set your enviroment variables which can also be found below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimothyac%2Fdough-mein&env=NEXT_PUBLIC_SITE_NAME,NEXT_PUBLIC_PRIMARY_COLOR,NEXT_PUBLIC_SECONDARY_COLOR,NEXT_PUBLIC_ACCENT_COLOR)

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

If you are cloning this, you will want to create an `env.local` for development. This is where you can quickly change the site name and colors.

Your `.env.local` file should look like this:

```bash
NEXT_PUBLIC_SITE_NAME=...
NEXT_PUBLIC_PRIMARY_COLOR=...
NEXT_PUBLIC_SECONDARY_COLOR=...
NEXT_PUBLIC_ACCENT_COLOR=...
```
