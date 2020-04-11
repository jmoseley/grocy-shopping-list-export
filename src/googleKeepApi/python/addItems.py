#!/usr/bin/env python

import sys
import json
from helpers import login

keep = login(sys.argv[1], sys.argv[2])

note = keep.get(sys.argv[3])

count = 0
for item in sys.argv[4:]:
    count += 1
    note.add(item, False)

keep.sync()

print(json.dumps({ "items_added": count }))