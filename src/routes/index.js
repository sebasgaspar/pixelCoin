const router =require('express').Router();

router.get('/',(req,res,next)=>{
  res.send('hello world');
});

router.get('/getWalletById',(req,res,next)=>{
  res.send('hello world');
});


module.exports = router;
