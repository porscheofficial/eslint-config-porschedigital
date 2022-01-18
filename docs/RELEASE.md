# Versioning and Release

`Standard Version` is used to support the release process.
The library generates a `changelog` based on the commit messages (uses `conventional-changelog`). See [standard-version](https://github.com/conventional-changelog/standard-version) for more details.

Because this project is set up with `yarn workspaces`, a more custom process is required:

- Each package is handled separately
- Standard Version is called without creating new `tags` and `commits`

# 🗂 Good to know

## Squash commits when merging PRs?

Yes, but keep in mind that one PR must only equal to one feature or fix.

## Create a release

1. Run tests: `yarn workspaces foreach -p run test:ci`
2. Run `yarn run release:prepare`
3. Check `changelogs`
4. Stage changes: `git add`
5. Commit changes: `git cz --type release`
6. Generate a new tag based on the updated version number (in sync between packages): `git tag -a v[version]`
7. Push to GitHub: `git push --tags`
8. Release packages separately: `npm publish`
