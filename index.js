const axios = require("axios");
const qs = require("qs")

async function getvid(querylink,ftype, quality) {
  return new Promise(async(resolve,reject) => {
    if(!querylink) {
      console.log("Give A YouTube Link!!");
    } 
    let formatType = ftype || 'mp4';
    let qualityType = quality || '360p';
    if(formatType === "mp3" && !qualityType)    {
      console.log(`Put A valid Quality!!`);
    }
    if(!formatType === "mp4" || !formatType === "mp3")
    {
      console.log(`Please Put A valid Format!!`);
    }

    
      
    
   /* if(formatType === "mp4") {
      
    if(qualityType !== "144p" || qualityType !== "240p"){
      console.log(`Please Put A Valid Quality!!`);
    } else if (qualityType !== "360p" || qualityType !== "480p") {
      console.log(`Please Put A Valid Quaality!!`);
    } else if (qualityType !== "720p")
    {
      console.log(`Please Put A Valid Quality!!`);
    }
      } else {
      if(qualityType !== "128kb") {
        console.log(`Please Put A Valid Quality!!`);
        }
      }*/
  let url = "https://savetube.io/api/ajaxSearch"
  let url2 = "https://dt176.jujauauaaaar.xyz/api/json/convert"
  
const headers = {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Length': 46,
  'Content-Type': 'application/x-www-form-urlencoded;',
  'Origin': 'https://savetube.io',
  'Referer': 'https://savetube.io/en23',
  'Sec-Ch-Ua': '"Not)A;Brand";v="24", "Chromium";v="116"',
  'Sec-Ch-Ua-Mobile': '?1',
  'Sec-Ch-Ua-Platform': '"Android"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
  'X-Requested-With': 'XMLHttpRequest',
};
    const headers2 = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Content-Type": "application/x-www-form-urlencoded;",
    "Origin": "https://savetube.io",
    "Referer": "https://savetube.io/",
    "Sec-Ch-Ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
    "Sec-Ch-Ua-Mobile": "?1",
    "Sec-Ch-Ua-Platform": '"Android"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
    }
const data = {
  q: querylink,
  vt:'home'
}
 await axios.post(url,qs.stringify(data), {headers}).then(async(res) => {
   if(formatType == "mp4") {
  // console.log(res.data.links);
 const data2 = {
  v_id:res.data.vid,
  ftype:formatType,
  fquality:qualityType,
  fname: res.data.fn,
  token:res.data.token,
  timeExpire:res.data.timeExpires
}
   
await axios.post(url2,qs.stringify(data2), {headers2}).then((ress) => {
     let x = ress.data;
  let info = {
    status: "Success!",
    statusCode: 200,
    format: formatType,
    quality: qualityType,
    channel: res.data.a,
    title: res.data.title,
    data: x.result
  }
    resolve(info)
     })

     } else {
let url3 = "https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994"

let headers3 = {
    "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9",
  "Content-Length": "151",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "Origin": "https://savetube.io",
  "Referer": "https://savetube.io/",
  "Sec-Ch-Ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
  "Sec-Ch-Ua-Mobile": "?1",
  "Sec-Ch-Ua-Platform": "\"Android\"",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "cross-site",
  "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile",
    "X-Requested-Key":"de0cfuirtgf67a"
}
      let data3 = {
  v_id:res.data.vid,
  ftype:formatType,
  fquality:qualityType,
  token:res.data.token,
  timeExpire:res.data.timeExpires,
  content:'SaveTube.io'
      }
     console.log(data3)
     await axios.post(url3,qs.stringify(data3), {headers3}).then((ress) => {
     let x = ress.data;
  let info = {
    status: "Success!",
    statusCode: 200,
    format: formatType,
    quality: qualityType,
    channel: res.data.a,
    title: res.data.title,
    data: x.result
  }
    resolve(info)
     })
    }
   }).catch(err => {
   console.log(err);
    })       
  })
}


getvid('https://youtu.be/Ae_9YVHezfk','mp3','128').then((data) => {
  console.log(data);
})