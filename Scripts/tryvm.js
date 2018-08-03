const vm = require("vm");

const x = 1;
const sandbox = { x: 2 };

const code =  `
    var ts = new Date().getTime();
    for(var a = 1; a < 10000000; a++);
    var te = new Date().getTime();
    console.log("Func in vm: %d", (te-ts));
    var tc = te-ts;
`;

vm.createContext(sandbox);
vm.runInContext(code, sandbox);
console.log(sandbox.tc);

var ts = new Date().getTime();
for(var a = 1; a < 10000000; a++);
var te = new Date().getTime();
console.log("Func in v8: %d", (te-ts));