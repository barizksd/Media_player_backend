//import json - server
const jsonserver =require('json-server')

//create server
const mediaPlayerServer =  jsonserver.create()

// create a middleware to parse the json 
const middleware = jsonserver.defaults()

//path for the data to store
const routes = jsonserver.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(routes)

//server posrt 
PORT = 4000 || process.env.PORT //deploy 

//sever run
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server runnig successfully at port bumber ${PORT}`);
    
})
