var request = require("request");

request.get("https://api-tst.minka.io/v1/signer?labels.domain=mydomain",{
  

headers:
{
  'x-api-key': '6F34Edf7C3991Bd5bE31aEab9CA88dbbEC81aE6aC83CBfc8b9a5CBE8',
  Authorization: 'Bearer MTU1NzAxNDczODQ5ODdEZmQyNTY5OEE3Nzk2QzlEZmFDRWI3OUE0MTkzZEJBNjlBQjg3Y2UyODA=',
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