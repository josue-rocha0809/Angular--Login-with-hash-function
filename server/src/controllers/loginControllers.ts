import {Request, Response} from 'express';
import pool from '../database';

class LoginControllerS{

    public async list(req:Request, res:Response){
        const users= await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async createUser(req:Request,res:Response){
        await pool.query('INSERT INTO users set ?',[req.body])
        res.json({message:'User saved'});
      }

    public async getOneUsuario(req:Request, res:Response){
        const { id }=req.params;
         const usuario = await pool.query('SELECT * FROM users WHERE id = ?',[id]);
         if(usuario.length>0){
             return res.json(usuario[0]);     
         }
         res.status(404).json({text:'the user dont exist'})
     }

     public async userValidate(req:Request,res:Response){
        const {username, password}= req.body;
        const users= await pool.query('Select username from users where username=? and password=?',
        [username,password]);
        if(users.length>0){
            
            const token="tokenperron";
            res.json({token});
           }else{
               res.json('usuario incorrecto');
           }
     }

}
const loginController = new LoginControllerS();
export default loginController;