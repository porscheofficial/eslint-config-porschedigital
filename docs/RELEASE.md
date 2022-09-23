# Versioning and Release

`Release Please` is used to support the release process.
The library generates a `changelog` based on the commit messages (uses `conventional-changelog`). See [googleapis/release-please](https://github.com/googleapis/release-please) for more details.

# 🗂 Good to know

## Squash commits when merging PRs?

Yes, but keep in mind that one PR must only equal to one feature or fix.

## Create a release

1. Run tests: `yarn workspaces foreach -p run test:ci`
2. Merge PR created by `Release Please Bot`
3. Check `changelogs`
4. Release packages separately: `npm publish`
