#!/bin/bash
set -x

OPEN_API_SCHEMA_ADDRESS=${OPEN_API_SCHEMA_ADDRESS:="https://demo.grocy.info/api/openapi/specification"}

openapi-generator generate \
  -i $OPEN_API_SCHEMA_ADDRESS \
  -g typescript-node \
  -o ./src/client \
  --skip-validate-spec