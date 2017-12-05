# Jungle-Dom

### A client side document creation domain for the [jungle framework](https://github.com/Space-Ed/junglejs)

### Usage 

```javascript

//the domain exports and entry point
import DOM from 'jungle-dom'

import {J, j, Domain} from 'jungle-core'

//creating 
const appD = new Domain().on(J)
    .define('dom', DOM)

const app = appD.recover(j('dom',{
    head:{
        mount:'jungle-mount-id'
    },

    header:j('h1', "The example"),
}))

```
