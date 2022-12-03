const express=require('express');
const router=express.Router();

router.get('/sum',(request,response)=>{
    const num1=request.query.num1;
    const num2=request.query.num2;
    const sum=parseInt(num1) + parseInt(num2);
    response.send('sum =' + sum);

});

router.get('/Home',(request,response) =>{

    response.send('Hi From Home Page');
});

module.exports=router;