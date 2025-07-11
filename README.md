# Frontend Boilerplate

A barebones boilerplate for building mobile web frontends using **Next.js**, **TypeScript**, and **Tailwind CSS** designed for fast development.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/) – Static typing for JavaScript
- [Next.js](https://nextjs.org/) – React framework for production
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework

## Features

- A minimal boilerplate with few dependencies.
- Multi-purpose use ( ranging from static to dynamic websites and apps)
- Mobile-first and responsive friendly.
- Dependencies/tools/frameworks used by the leading frontend community and great community support.


## Prerequisites

### Setup your workspace

   - [Linux, MacOS](https://github.com/Madhyamakist/workspace-setup-mac)
   - [Windows](https://github.com/Madhyamakist/workspace-setup-windows)


### Ensure Node version consistency

The node version needs to be the same as mentioned in the `.tool-versions` file.

Install the node version if not installed:
```
asdf install nodejs X.Y.Z
```

Make sure the correct node version has been set before you work on this project.
```
node -v
```

Before getting started, ensure `asdf` and node plugin is installed and working.This project uses [asdf](https://asdf-vm.com/) to manage language versions. 

## Getting Started

Clone the repository and run the setup:

```bash
git clone https://github.com/your-org/frontend-boilerplate-js.git myproject
cd myproject/code
npm install
npm run dev
```
## Create a Fresh Next.js Project

If you prefer to start from scratch with the latest official Next.js setup, run:
```bash
npx create-next-app@15.3.4 myproject --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```