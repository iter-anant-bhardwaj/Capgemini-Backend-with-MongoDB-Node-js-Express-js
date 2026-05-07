const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('login',()=>{
    console.log("login Successful");
})
emitter.on('logout',()=>{
    console.log("logout Successful");
})

emitter.emit('login')
emitter.emit('logout')