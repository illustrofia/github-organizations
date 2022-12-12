# Github Organizations

### Decisions

- Yarn

  Faster than npm and I haven't worked with pnpm yet. Of other options I am not aware.

- Vite

  Faster, cleaner and easier to use than other options.

- TailwindCSS

  It's simple to use, you can write a lot of style with little code.

- ReactQuery

  Easy to work with and it has a ton of useful features.

####

### General Structure

In order to maintain code quality I used:

- `.husky/*`: git hooks to maintain code quality
- `.eslintrc.cjs`: eslint config
- `.prettierrc.json`: prettier config

### Running the project
1. Install Yarn
2. Install dependencies with `yarn`
3. Run `yarn dev` to start development.