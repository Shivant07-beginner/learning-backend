// this file containss all the basic configuration logif for tha app server to work 

import dotenv from 'dotenv'
type serverConfig = {
    PORT : number
}

function Loadenv() {
    dotenv.config();
}

export const serverConfig : serverConfig = {
    PORT : Number(process.env.PORT)|| 3000
} 
export default Loadenv;