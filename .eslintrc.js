// http://eslint.org/docs/user-guide/configuring
/**
 * eslint规则配置，用于被业务工程引用
 * @type {number}
 */
const JSDOC_LEVEL = 1
const ignoreMethods = [
  // Vue
  'render',
  'renderError',
  // Lifecycle Hooks
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'beforeDestroy',
  'destroyed',
  // Options
  'computed',
  'components',
  'mixins',
  // Vue directives
  'bind',
  'unbind',
  // Vue Router
  '$route',
  'beforeRouteEnter',
  'beforeRouteUpdate',
  'beforeRouteLeave',
]

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  globals: {
    // 'window': true,
    AMap: true,
  },
  parserOptions: {
    // 'ecmaVersion': 6,
    // 'sourceType': 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'filenames',
    'html',
  ],

  // add your custom rules here
  rules: {
    'valid-jsdoc': [JSDOC_LEVEL, {
      requireReturn: false,
    }],
    'require-jsdoc': [JSDOC_LEVEL, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    // 'object-literal-jsdoc/obj-doc': [JSDOC_LEVEL, {
    //   ignoreMethods,
    // }], // 依赖于xkeshi私有npm包
    // 不允许驼峰式命名
    'filenames/match-regex': [1, '^[0-9a-z-.]+$', true],
    'no-reserved-keys': [0],
    'no-debugger': [1],
    'no-alert': [1],
    'semi': [2, 'never'],
    'no-console': [1],
    'prefer-const': [1],
    'eol-last': [1],
    'object-shorthand': [1],
    'no-param-reassign': [0],
    'func-names': [0],
    'no-shadow': [1],
    'arrow-body-style': [0],
    'comma-dangle': [1],
    'space-before-function-paren': [1],
    'prefer-template': [1],
    'no-new': [0],
    'consistent-return': [1],
    'quote-props': [1],
    'array-bracket-spacing': [1],
    'no-unused-vars': [1, { argsIgnorePattern: '^h|context$' }],
    'computed-property-spacing': [1],
    'max-len': [1],
    'import/no-extraneous-dependencies': [0],
    'global-require': [0],
    'arrow-parens': [0],
    'linebreak-style': [0],
    'no-plusplus': [0],
    'no-underscore-dangle': [0],
    'new-cap': [1],
    'no-restricted-syntax': [0],
    'class-methods-use-this': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'import/no-dynamic-require': [0],
    'import/imports-first': [0],
    'import/newline-after-import': [1],
    'import/extensions': [0],
  },
}
