#!/bin/bash

OPEN_API_SCHEMA_ADDRESS=${OPEN_API_SCHEMA_ADDRESS:="https://demo.grocy.info/api/openapi/specification"}

swagger-codegen generate \
  -i $OPEN_API_SCHEMA_ADDRESS \
  -l typescript-angular \
  -o src/client