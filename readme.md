# yarn add

## dev dependency

```bash
yarn add typescript ts-node nodemon tslint-config-prettier @types/node @types/helmet @types/morgan @types/cors graphql-to-typescript gql-merge babel-runtime @types/bcrypt --dev
```

## dependency

```bash
yarn add graphql-yoga helmet morgan cors graphql-tools merge-graphql-schemas typeorm pg class-validator bcrypt
```

# tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "module": "commonjs",
    "target": "es5",
    "lib": ["es6", "dom", "esnext.asynciterable"],
    "sourceMap": true,
    "allowJs": true,
    "moduleResolution": "node",
    "rootDir": "src",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": false,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts"
  ]
}
```

# tslint.json

```json
{
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": ["config/**/*.js", "node_modules/**/*."]
  },
  "rules": {
    "no-console": false,
    "member-access": false,
    "object-literal-sort-keys": false,
    "ordered-imports": true,
    "interface-name": false,
    "strict-null-checks": false
  },
  "rulesDirectory": []
}
```
