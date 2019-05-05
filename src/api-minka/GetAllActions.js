var request = require("request");

request.get("https://api-tst.minka.io/v1/action?labels.domain=pixels",{
  

headers:
{
  'x-api-key': '6F34Edf7C3991Bd5bE31aEab9CA88dbbEC81aE6aC83CBfc8b9a5CBE8',
  Authorization: 'Bearer MTU1NzAxNDI1OTc5MEVkRDBGZTk0NTc3NmUzODFmMTc0MzVhM2Y4YjU4RkUzRDEzZTI0NGM0ZDE=',
  'Content-Type': 'application/json'

}
}, (error, res , body)=> {
  if(error){
    console.error(error);
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
   console.log(JSON.parse(body))
});