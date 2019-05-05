var request = require("request");
request.post("https://api-tst.minka.io/v1/wallet",{
json:{
    handle: "$mybank", 
    labels: {
	domain: "pixels",
    type: "TROUPE"
    }
},
headers:
{
  'x-api-key': '6F34Edf7C3991Bd5bE31aEab9CA88dbbEC81aE6aC83CBfc8b9a5CBE8',
  Authorization: 'Bearer MTU1NzAxNzE4Njc1NkVGQTQ2YzBCOTUzRUFiYjlkNmFkMGZBNDJkYWM4RkZhMEEzMGRGMGM3MUI=',
  'Content-Type': 'application/json'

}
}, (error, res , body)=> {
  if(error){
    console.error(error);
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  
   console.log(body);
});