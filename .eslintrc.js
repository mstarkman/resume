module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.stories.jsx',
        '**/*.test.js?(x)',
        '**/test_support/**/*.js?(x)',
      ],
    }],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      code: 132,
      ignoreComments: true,
      ignoreTrailingComments: true,
    }],
    'no-return-assign': ['error', 'except-parens'],
    'import/no-named-as-default': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
  },
  globals: {
    expect: true,
    jest: true,
    React: true,
    test: true,
    xit: true,
  },
}
