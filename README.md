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

1. First setup your workspace

   - [Linux, MacOS](https://github.com/Madhyamakist/workspace-setup-mac)
   - [Windows](https://github.com/Madhyamakist/workspace-setup-windows)


2. Before getting started, ensure `asdf` is installed and working.This project uses [asdf](https://asdf-vm.com/) to manage language versions. 

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
npx create-next-app@latest myproject --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```