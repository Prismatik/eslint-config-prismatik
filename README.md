# eslint-config-shortlyster
Shortlyster's eslint configurations

## Getting started

Refer to this github repo in you `package.json` dev dependencies.

```
"eslint-config-shortlyster" :
  { "type" : "git",
    "url" : "https://github.com/Shortlyster/eslint-config-shortlyster.git"
  }

```

Add `.eslintrc` to your project.

```
{
  "extends": "shortlyster",
  "rules": {
    // project specific rules go here
  }
}
```

## Rules

We extend from [AirBnb's rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Our exceptions can be found in [our config](https://github.com/Shortlyster/eslint-config-shortlyster/blob/master/index.js).
