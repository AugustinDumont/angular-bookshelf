# angular-bookshelf

## Installation

```
$ npm install -g npm@latest
$ npm install -g @angular/cli
```

## Dependencies

### RX.js

Library for CRUD stuf and easy connect to API

```
$ npm install rxjs
```

## Initiation du projet Angular avec CLI

```
$ ng new angular-bookshelf
```

### Apollo

To use GraphQl request with Angular

```
$ ng add apollo-angular
```

src/app/graphql.module.ts

```
const uri : http://graph.becode.xyz
```

### ng-zorro

Compenent's library

```
$ ng add ng-zorro-antd
```

Don't forget the different imports in module.ts

### bootstrap

```
$ npm install  --save @ng-bootstrap/ng-bootstrap
```

angular.json

"styles": [
"/node_modules/bootstrap/dist/css/bootstrap.min.css",
"styles.scss"
]

import dans styles.scss

@import "~bootstrap/dit/css/bootstrap.min.css

## Creation first component Home

define in which module --module app

```
$ ng generate component home --module app
```

insert <app-home></app-home> dans app.component.ts
