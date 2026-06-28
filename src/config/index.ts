 import dotenv from 'dotenv';

 type Serverconfig ={
    PORT : number;
 }

 function leadEnv(){
    dotenv.config();
 }
 leadEnv();

 export const serverConfig : Serverconfig = {
    PORT : Number(process.env.PORT)
 }
