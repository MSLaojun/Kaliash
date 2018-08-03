const ping = require("net-ping");

const session = ping.session();

session.pingHost("10.172.211.97", (error, target, sent, rcvd) => {
    if (error){
        console.log("ERROR!");
        console.log(error);
    }else{
        console.log(target);
    }
});