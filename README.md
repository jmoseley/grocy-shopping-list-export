# grocy-shopping-list-export
A chrome extension to export a grocy shopping list

## Development

Assumes you have node installed (`nvm use`).

### 1. Install swagger-codegen

[Guide here](https://github.com/swagger-api/swagger-codegen#table-of-contents)

```
brew install swagger-codegen
```

### 1. Generate the client

```
yarn generate-client
```

### 1. Compile

```
yarn compile
```

### 1. Configure

Add grocy URL/API key to config.json.

### 1. Run

```
node ./src/index.js
```
