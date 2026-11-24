#!/bin/sh
# Regenerates the TypeScript client whenever a .proto file changes.
# Uses a simple checksum poll because file-change events are unreliable
# on Docker Desktop bind mounts.

generate() {
  echo "[codegen] generating..."
  buf generate /proto --template /codegen/buf.gen.yaml && echo "[codegen] done"
}

checksum() {
  find /proto -name '*.proto' -type f -exec md5sum {} + 2>/dev/null | sort | md5sum
}

last=""
while true; do
  current="$(checksum)"
  if [ "$current" != "$last" ]; then
    generate
    last="$current"
  fi
  sleep 2
done
