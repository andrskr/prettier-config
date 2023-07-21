# Prettier Setup

These are my settings for Prettier.

You might like them - or you might not. Don't worry; you can always change them to match your coding preferences.

## Usage

Install the package using `pnpm` (or `npm`, or `yarn`):

```sh
pnpm add -D @andrskr/prettier-config
```
Add the `prettier` key to your `package.json`

```diff
diff --git a/package.json b/package.json
index 2ecef3d..260838f 100644
--- a/package.json
+++ b/package.json
@@ -5,6 +5,7 @@
   "keywords": [
     "prettier"
   ],
+  "prettier": "@andrskr/prettier-config"
 ```
[Check out the `prettier` documentation for more info on sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Plugins

The following plugins are included in the Prettier configuration:

1. **[@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)**: An opinionated but flexible prettier plugin to sort import statements.

2. **[prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)**: A Prettier plugin to format JSDoc comments.

3. **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)**: A Prettier plugin for Tailwind CSS that automatically sorts classes based on our recommended class order.
