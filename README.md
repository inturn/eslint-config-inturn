# eslint-config-inturn

This is a config that contains the linting rules used by developers for Inturn!

## Installation

1. Install the config itself.
```bash
# install the config itself
npm install --save-dev eslint-config-inturn
```

2. If you haven't already, install `install-peerdeps` globally.
```bash
npm install -g install-peerdeps
```

3. Install the peer dependencies of `eslint-config-inturn`.
```bash
install-peerdeps --dev eslint-config-inturn
```

4. Create an `.eslintrc` file in the root directory of your project that looks like this:
```bash
// .eslintrc
{
  "extends": [
    'inturn'
  ]
}
```

5. You can run the linter in your npm scripts like this:
```javascript
"scripts": {
  "lint": "eslint ."
}
```
