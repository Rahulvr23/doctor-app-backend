const jsonServer=require('json-server')
const hospitalServer=jsonServer.create()
const router=jsonServer.router('db.json')
const middilware=jsonServer.defaults()
const port=3001
hospitalServer.use(router)
hospitalServer.use(middilware)
hospitalServer.listen(port,()=>{
    console.log("rest server listening on port"+3001);
})