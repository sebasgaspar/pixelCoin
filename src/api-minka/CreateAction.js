var request = require("request");
var n;

      app.post('/getWalletById/:name',(req,res) =>{
    n = req.param.name
var access_token="";
var url="https://api-tst.minka.io/v1/action";
var header = {'content-Type':'application/x-www-form-urlencoded'};
var body = 'client_id=CLIENT_ID&secret=SECRET&grant_type=client_credentials';
var form = {id:	"Fd3B699C8c25797fbd1b6f6C824c2dB3 ",
 secret:"fBEeD4a513f35A5FD30e24b6AbDB7F314dde2c16acBf2cA2"}
  request.post({url:url,form:form, header:header},function(err,resp,body){
    access_token = JSON.parse(body).access_token;
request.post("https://api-tst.minka.io/v1/wallet",{
json:{
    source:"$pcoin",
	target:"$Sebastian",
	amount:"0.0000023",
	symbol:"$pcoin",
	labels:{
		type: "SEND",
		domain: "pixels"
	
    }
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
 });