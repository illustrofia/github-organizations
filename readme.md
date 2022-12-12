# Github Organizations

## Strategy

### I. Project Setup

I chose to focus on setting the project right at first, so I spent some time configuring the project and choosing my technologies.

### II. Making it work

The next step was getting the correct data from the GitHub API.

### III. Making it pretty

Here I focused mainly on implementing the UI based on the Figma file.


### IV. Final touches

I decided to ignore some of the small UI features such as the Member counter, because I had some limit from the Github API which I didn't solve from the beginning and that end up bitting me in the neck later on 🎉. However, I focused on making the code easier to scale.

## Scalability

If we want to scale the project and create a component with pagination, or infinite scroll, we can easily do that by adapting the request for fetching organizations - instead of having hard coded values, it could receive props for `per_page` and `since`. This can be easily done with React Query.

Also, I would definitely connect to the Github API using some sort of key which allows us to make more request.


## Known Issues

1. The card transitions (I would search for different approaches that would achieve the animation from Figma; perhaps also using react-spring)
2. The member counters are missing altogether.
3. The case where the request failed is not treated correctly, therefore the user gets a blank screen when the api request limit is met. I would use React Query's features to display some kind of message when the request fails.
4. Not responsive to smaller screens. I didn't focus on this.

## Technologies

- Husky - helps to keep a clean codebase and prevents errors from getting through the commit phase
- Yarn - faster than npm and I haven't worked with pnpm yet. Of other options I am not aware.
- Vite - faster, cleaner and easier to use than other options.
- TailwindCSS - simple to use, you can write a lot of style with little code.
- ReactQuery - easy to work with and it has a ton of useful features.
- eslint - self explanatory
- prettier - self explanatory
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Running the project
1. Install Yarn
2. Install dependencies with `yarn`
3. Run `yarn dev --host` to start development.


## Deployment

Deployment happens automatically through Netlify. Check out the project [here](https://github-organizations.netlify.app/).
