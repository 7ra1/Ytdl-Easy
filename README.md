# Ytdl-Easy
Ytdl-Easy is a YouTube video downloader module

It's scrape a website called [SaveTube.io](https://savetube.io)

I made it for learn purpose use it as your need.


## Installation

To install [Ytdl-Easy], follow these steps:

1. install the npm package:

   ```bash
   npm install ytdl-easy
   ```

2. Formats and qualites for this module:

1. mp4(working):    144p,240p,360p,480p,720p
2. mp3(In development): 128kbps (soon available)


3. Examples:
```javascript
const Ytdl = require("ytdl-easy");
const yturl = "https://youtu.be/r6zIGXun57U";

Ytdl(yturl,'mp4','480p')  //By default format is mp4 and quality is 360p
.then( res => {
console.log(res)
}
```
```output
{"status":"Success!",
"statusCode":200,
"format":"mp4",
"quality":"480p",
"channel":"League of Legends","title":"Legends Never Die (ft. Against The Current) | Worlds 2017 - League of Legends",
"data":"https://dt176.jujauauaaaar.xyz/download?file=ZGQ3NDVmMzYxMTU1MDcyYTRlZmMwM2ExYzMzNmE4NjliYjYwNTA2NmNlMjc3Mjc3NjU0ZDE1OTdmNTczY2ZjNl80ODBwLm1wNOKYr1NhdmVUdWJlLmlvLUxlZ2VuZHMgTmV2ZXIgRGllIChmdC4gQWdhaW5zdCBUaGUgQ3VycmVudCkgfCBXb3JsZHMgMjAxNyAtIExlYWd1ZSBvZiBMZWdlbmRz4pivNDgwcA"}
```
