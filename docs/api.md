<!-- API page: shows example endpoints and code usage -->
# API

<!-- general API description -->
## Overview

The PaperBeam API provides tools for developers to manage content, modify layouts, and publish structured pages efficiently.

::: warning
This API is fictional and created specifically for this lab.
:::

<!-- example endpoints -->
## Sample Endpoints

- `GET /api/pages`
- `POST /api/pages`
- `PUT /api/pages/:id`

<!-- JavaScript usage example -->
## JavaScript Example

```js
fetch('/api/pages')
  .then(res => res.json())
  .then(result => console.log(result));
```

<!-- HTML usage example -->
## HTML Example

```html
<button>Create Page</button>
```