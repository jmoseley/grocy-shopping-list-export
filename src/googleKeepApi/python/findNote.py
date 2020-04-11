#!/usr/bin/env python

import sys
import json
from helpers import login

keep = login(sys.argv[1], sys.argv[2])

notes = keep.find(labels=[keep.findLabel(sys.argv[3])])

print(json.dumps(list(map(lambda gnote: { "id": gnote.id, "title": gnote.title }, notes))))