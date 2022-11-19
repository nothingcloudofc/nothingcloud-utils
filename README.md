## Informações
Module designed to support Nothing Cloud activities.

## Install
```
npm install @nothingcloud/utils
```

```javascript
const { Status: { ram, ramTotal, ramUsed } } = require("@nothingcloud/utils");
// Or use directly @nothingcloudofc/status

const { Terminal: { info, warn, error, success, debug } } = require("@nothingcloud/utils");
error("Example error message :think:");

// Registry system.
const { Registry: { add, del, check } } = require("@nothingcloud/utils");

add("Hello log", "log.txt");
add("Another message in same log", "log.txt");
add("Another timeZone?", "uscentralLogs.txt", "US/Central");

del("uscentralLogs.txt"); // Delete the uscentralLogs file.

if (check("uscentralLogs.txt")) {
    console.log("uscentralLogs exists!");
} 

const Utils = require("@nothingcloud/utils");

// Discord Easy Webhook
Utils.webhook("hi friend", "https://discord......");
Utils.webhook({ content: "example object webhook" }, "https://discord......");

// Protect your code
Utils.apply(() => { console.log(USER) }, "log.txt"); 
// support file or webhook (discord);

Example save in log.txt:
00/00/0000 00:00:00 -> ReferenceError: USER is not defined

// Add Util prototypes;
Utils.prototypes();

String.firstUpper("potato") -> "Potato";
Array.random() -> Give random array value;

```

## LICENSE
This project is licensed under the Apache License 2.0