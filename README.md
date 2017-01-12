# Exempelprojekt från brownbag med React, redux och typescript

Skriver ner stegen jag gjorde här på brownbagen. 
Tänker också att detta kan fungera som en tutorial/lathund för att sätta upp ett tomt bygge, bara att följa stegen och sen är man uppe och kör.

##npm måste vara installerat. Det är bundlat med node:
https://nodejs.org/en/download/

Sen är det bara att skapa en ny tom map, öppna en kommandoprompt i den mappen och fortsätta

###Installera globala libs
```
npm install -g webpack typescript typings
```
Detta installerar globala libraries som inte är specifika för projektet. I detta fallet är det webpack för att transpilera och bundla,
typescript för att skriva typad kod och sist typings som är ett verktyg för att ladda ner typescript definitions för externa libs vi 
kommer att använda oss av; exempelvis react

###Initiera projektet
Följ anvisningarna på skärmen
```
npm init
```

###Installera de libs vi vill använda och länka ihop bygget med typescript
```
npm install react react-dom --save
npm install ts-loader source-map-loader --save-dev
npm link typescript
```

###Skapa webpack.config.js:
Detta är configfilen för webpack. Notera filsökvägarna för entry och output. Entry är startfilen för vår applikation, och output är vår
"byggmapp". Byggmappen representerar de filer vi kan ladda upp i CRM som webbresurser
```
module.exports = {
    entry: "./client/applications/index.tsx",
    output: {
        filename: "./stq_/scripts/bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}
```
###Skapa tsconfig.json
Konfigurationsfil för typescript. Denna påverkar inte "bygget", utan bara hur vi skriver typescript.
```
{
    "compilerOptions": {        
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es6",
        "jsx": "react"
    },
    "exclude": [
        "node_modules",
        "wwwroot"
    ]
}
```
###Installera typescript definitions för react och react-dom
```
typings install npm~react --save
typings install npm~react-dom --save
```
###Sätt upp mappstrukturen/filbas
Såhär har jag satt upp det. Om du använder en annan struktur så se till att den mappar mot configurationen i webpack.config.js
```
/client/
        applications/
        components/
        domain/
        store/
/stq_/
        html/
        scripts/
        css/
```
###Installera react-redux och typescriptdefinitioner för dessa
```
npm install --save redux react-redux
typings install dt~redux --global --save
typings install dt~react-redux --save
```

###Byggkonfigurationen är klar
Starta webpack för att påbörja transpileringen och bundligen av din app. bundle.js kommer att skapas upp i byggmappen.
-w i kommandot startar webpack med en "watch"-flagga som gör att webpack ligger och lyssnar i din filstruktur och kommer att transpilara
ihop en ny bundle.js varje gång någon fil ändrar sig
```
webpack -w
```
I brownbag:en använde jag mig av webpack dev server:
https://webpack.github.io/docs/webpack-dev-server.html


###Skapa applikationen
skapa upp en fil som heter index.tsx i /client/applications som ser ut såhär:
```
import * as React from 'react';
import * as ReactDom from 'react-dom'

ReactDom.render(    
    <div>exempel</div>,
    document.getElementById("app")
);
```
###skapa upp en html-fil att "hänga" appen på 
Skapa upp filen i stq_/html/
```
<html>
    <head>
    </head>
    <body>
        <div id="app"></div>
        <script src="../scripts/bundle.js"></script>
    </body>
</html>
```
###Titta på resultatet
Du kan öppna html-filen i chrome direkt eller starta upp webpack-dev-server (måste installeras globalt först) och surfa till den

