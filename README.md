# ue.aelliixx
> **DISCLAIMER!**
> 
> This project is under heavy development. Neither the documentation nor the surrounding web infrastructure are in a production ready state.

ue.aelliixx is a collaborative project with the goal of creating better, more in-depth Unreal Engine
documentation and guides.

This repository (i.e. `aelliixx/ue-docs`) contains the ue.aelliixx.com website core infrastructure and styling.

[aelliixx/ue-docs-pages](https://github.com/aelliixx/ue-docs-pages) contains all of the MDX documentation files. If you wish to contribute new documentation or correct errors, you should make a pull request/open an issue there instead.

[//]: # (`aelliixx/ue-docs-guides` is not yet made but will contain MDX files for guides and tutorials.)

## Getting Started

First, run the development server:

```bash
npx next dev
# OR
npx next dev --turbo
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result;

To create a production build instead, use the following: 
```bash
npx next build
```
This will generate an `/out/` directory containing all of the static files.
