const express=require('express');
const app=(express());
const update_name=require('./routers/update_name');
const find_by_id=require('./routers/find_by_id');
const find_by_name=require('./routers/find_by_name');
const list = require('./routers/list');
const add = require('./routers/add');
const sum = require('./methods/sum');
const midd = require('./middle/middleware');
const build=require('./modules/build');
app.get("/sum", sum);
app.get("/Home", sum);
app.get("/add", add);
app.get("/list", list);
app.get("/one", find_by_name);
app.get("/add/:id", find_by_id);
app.get("/edit/:id", update_name);
app.use(midd);

app.listen( 3500 , () => {
    console.log('server is running');
  });

  module.exports=app;
