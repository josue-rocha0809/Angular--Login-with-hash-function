import {Router} from 'express';
import pool from '../database';
import loginController from '../controllers/loginControllers';

class LoginRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',loginController.list);
        this.router.get('/:id',loginController.getOneUsuario);
        this.router.post('/',loginController.createUser);
        this.router.post('/val',loginController.userValidate);
    }

}
export const loginRoutes= new LoginRoutes();
export default loginRoutes.router;