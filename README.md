# Microservice > Preview

Extracted microservice from https://github.com/chrisparnin/checkbox.io.

### Service

Exposes the endpoint `POST localhost:3000/preview`, accepting a body with `{markdown: <string>}`.

Returns the result `{preview: <html>}`.

### Testing locally

Start service.
```bash
node index.js
Microservice listening on http://localhost:3000/preview
```

In another terminal, run:

```bash
curl -X POST -H "Content-Type: application/json" --data @resources/survey.json http://localhost:3000/preview
```

### Broken branch

For testing a broken version of service, there is a bad commit on the broken branch:
https://github.com/chrisparnin/checkbox.io-micro-preview/tree/broken

