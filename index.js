module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react",
    "prettier/flowtype"
  ],
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "legacyDecorators": true
    }
  },
  settings: {
    "import/resolver": "webpack"
  },
  plugins: ["react", "jest", "flowtype", "prettier"],
  rules: {
    "camelcase": "warn",
    "class-methods-use-this": "error",
    "comma-dangle": ["error", "only-multiline"],
    "consistent-return": "error",
    "eqeqeq": "error",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": [
          "**/*.test.js",
          "**/*.spec.js",
          "**/test.js",
          "**/__tests__/**",
          "**/webpack.**",
          "**/*.stories.js"
        ]
      }
    ],
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/label-has-for": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "no-bitwise": "error",
    "no-console": ["error", { "allow": ["warn", "error", "info"] }],
    "no-else-return": "error",
    "no-extra-boolean-cast": "error",
    "no-plusplus": "off",
    "no-prototype-builtins": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-return": "error",
    "object-curly-newline": "off",
    "prefer-promise-reject-errors": "error",
    "prettier/prettier": "error",
    "quotes": ["error", "single", "avoid-escape"],
    "react/default-props-match-prop-types": ["error",{"allowRequiredDefaults": true}],
    "react/forbid-prop-types": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-spacing": ["error", {
      "when": "never",
      "children": true
    }],
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "react/no-array-index-key": "warn",
    "react/no-find-dom-node": "error",
    "react/no-multi-comp": "error",
    "react/no-string-refs": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/require-default-props": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "semi": ["error", "always"],
    "space-before-function-paren": "off",
  }
};
