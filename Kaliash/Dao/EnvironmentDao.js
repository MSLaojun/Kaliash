class EnvironmentDao{
    constructor(){
        self.SupportedEnvironmentTypes = {}
    }

    CreateGetEnvironmentsByTypeCommand(typename){
        return null, `Match (node:Environment) Where node.type=` + typename + ` return node`; 
    }    

    GetEnvironmentsByType(typename){
        // TODO : Check typename OK
        
    }
}

