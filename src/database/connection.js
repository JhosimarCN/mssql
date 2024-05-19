import sql from "mssql"

//enlistamos la configuracion de la conneccion con la base de datos
var dbSettings = {
    user: "sa",
    password: "Kjkszpj123",
    server: "192.168.100.71",
    port: 1433,
    database: "webstore",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }

}

//creamos la funcion que permitira conectarnos a la base de datos
export const getConnection = async ()=>{
    try {
        const pool = await sql.connect(dbSettings);
        


        return pool;
        
    }catch (error){
        console.error(error)
    }
}
