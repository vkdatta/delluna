# Delluna icon metadata

One JSON file belongs to each public icon name:

```text
src/icons/weather/umbrella.svg
src/metadata/umbrella.json
```

Metadata is intentionally minimal and human-maintained:

```json
{
  "id": "dl_immutable_id_here",
  "tags": ["weather", "rain", "protection"]
}
```

The filename is the public icon name. Do not store `name`, source path, extension, hash, or folder/category here.

The builder derives those values. The Action Engine should create/rename/delete the matching metadata file whenever it creates/renames/deletes an icon.
