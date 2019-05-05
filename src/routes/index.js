var request = require("request");

const router =require('express').Router();

router.get('/',(req,res,next)=>{
  res.send('hello world');
});
router.get('/VerCuenta/:name',(req,res,next)=>{
res.send(true);
var name=req.params.name;
  var access_token="";
  var url="https://api-tst.minka.io/oauth/token";
  var header = {'content-Type':'application/x-www-form-urlencoded'};
  var body = 'client_id=CLIENT_ID&secret=SECRET&grant_type=client_credentials';
  var form = {id:	"Fd3B699C8c25797fbd1b6f6C824c2dB3 ",
   secret:"fBEeD4a513f35A5FD30e24b6AbDB7F314dde2c16acBf2cA2"}
    request.post({url:url,form:form, header:header},function(err,resp,body){
      access_token = JSON.parse(body).access_token;
  request.post("https://api-tst.minka.io/v1/action",{

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

router.get('/CreateAction/:name',(req,res,next)=>{
  res.send(true);
  var destino = req.params.name
  var access_token="";
  var url="https://api-tst.minka.io/oauth/token";
  var header = {'content-Type':'application/x-www-form-urlencoded'};
  var body = 'client_id=CLIENT_ID&secret=SECRET&grant_type=client_credentials';
  var form = {id:	"Fd3B699C8c25797fbd1b6f6C824c2dB3 ",
   secret:"fBEeD4a513f35A5FD30e24b6AbDB7F314dde2c16acBf2cA2"}
    request.post({url:url,form:form, header:header},function(err,resp,body){
      access_token = JSON.parse(body).access_token;
  request.post("https://api-tst.minka.io/v1/action",{
  json:{
      source:"$pcoin",
    target:"$"+destino,
    amount:"0.23",
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
    var id_action=body.action_id;
     console.log(body);
     request.post("https://api-tst.minka.io/v1/action/"+id_action+"/signed",{
json:{
    labels: {}
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
});

router.get('/MostrarWallet/:name',(req,res,next)=>{
  res.send(true);
  var name=req.params.name;
var access_token="";
var url="https://api-tst.minka.io/oauth/token";
var header = {'content-Type':'application/x-www-form-urlencoded'};
var body = 'client_id=CLIENT_ID&secret=SECRET&grant_type=client_credentials';
var form = {id:	"Fd3B699C8c25797fbd1b6f6C824c2dB3 ",
 secret:"fBEeD4a513f35A5FD30e24b6AbDB7F314dde2c16acBf2cA2"}
  request.post({url:url,form:form, header:header},function(err,resp,body){
    access_token = JSON.parse(body).access_token;
request.get("https://api-tst.minka.io/v1/wallet?labels.domain="+name,{
  

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
   console.log(JSON.parse(body));
 //  console.log((JSON.parse(body).handle.value));
});
});
});

router.get('/CreateWallet/:name/:persona',(req,res,next)=>{
  res.send(true);
  var n = req.params.name;
  var dominio=req.params.persona;
var access_token="";
var url="https://api-tst.minka.io/oauth/token";
var header = {'content-Type':'application/x-www-form-urlencoded'};
var body = 'client_id=CLIENT_ID&secret=SECRET&grant_type=client_credentials';
var form = {id:	"Fd3B699C8c25797fbd1b6f6C824c2dB3 ",
 secret:"fBEeD4a513f35A5FD30e24b6AbDB7F314dde2c16acBf2cA2"}
  request.post({url:url,form:form, header:header},function(err,resp,body){
    access_token = JSON.parse(body).access_token;
request.post("https://api-tst.minka.io/v1/wallet",{
json:{
    handle: "$"+n, 
    labels: {
	domain: dominio,
    type: "TROUPE"
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


module.exports = router;
