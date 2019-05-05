var request = require("request");

var access_token="";
var url="https://api-tst.minka.io/oauth/token";
var header = {'content-Type':'application/x-www-form-urlencoded'};
var body = 'client_id=CLIENT_ID&secret=SECRET&grant_type=client_credentials';
var form = {id:	"Fd3B699C8c25797fbd1b6f6C824c2dB3 ",
 secret:"fBEeD4a513f35A5FD30e24b6AbDB7F314dde2c16acBf2cA2"}
  request.post({url:url,form:form, header:header},function(err,resp,body){
    access_token = JSON.parse(body).access_token;
request.put("https://api-tst.minka.io/v1/wallet/$sebastian",{
json:{
    signer: [ "wbkFtnMGfbfwpM6EKdbSSppeA31m4ZqP53" ],
	default: "wbkFtnMGfbfwpM6EKdbSSppeA31m4ZqP53"
},
headers:
{
  'x-api-key': '6F34Edf7C3991Bd5bE31aEab9CA88dbbEC81aE6aC83CBfc8b9a5CBE8',
  Authorization: 'Bearer '+access_token,
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
});