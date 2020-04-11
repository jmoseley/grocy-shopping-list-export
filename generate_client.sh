#!/bin/bash
set -xe

openapi-generator generate \
  -i ./grocy_api.json \
  -g typescript-node \
  -o ./src/grocyClient \
  --skip-validate-spec

# Fix typings for node upgrade
sed -i 's/http.ClientResponse/http.IncomingMessage/g' src/grocyClient/**/*.ts

# Fix a problematic line
sed -i '/..\/model\/product | Chore | Battery | Location | QuantityUnit | ShoppingListItem | StockEntry/d' src/grocyClient/**/*.ts

# Fix formatting
prettier --write src/grocyClient/**/*.ts