module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'indent': ['error', 2, {
      'SwitchCase': 1, 'ArrayExpression': 1, 'ObjectExpression': 1,
    }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'no-eval': 'error',
    'max-len': ['error', {
      'code': 150,
      'comments': 150,
      'ignoreTemplateLiterals': true,
      'tabWidth': 2,
    }],
    'semi-style': ['error', 'last'],
    'space-before-function-paren': ['error', 'never'],
    'no-var': 'error',
    'prefer-const': 'error',
    'curly': ['error', 'all'],
    'no-prototype-builtins': 'off',
    'no-shadow': ['error', {
      'builtinGlobals': true, 'hoist': 'all', 'allow': [],
    }],
    'no-redeclare': ['error', { 'builtinGlobals': true }],
    'no-param-reassign': 'error',
    'operator-linebreak': ['error', 'before'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'standard/no-callback-literal': 0,
    'import/prefer-default-export': 0,
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always', prev: ['const', 'let', 'var'], next: '*',
      },
      {
        blankLine: 'always', prev: '*', next: ['return', 'block-like', 'multiline-expression'],
      },
      {
        blankLine: 'always', prev: '*', next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'],
      },
    ],
    'brace-style': ['error', '1tbs'],
    'object-curly-newline': [2, {
      'ObjectExpression': {
        'consistent': true,
        'minProperties': 2,
      },
    }],
  },
};

