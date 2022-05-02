"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const loginControllers_1 = __importDefault(require("../controllers/loginControllers"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', loginControllers_1.default.list);
        this.router.get('/:id', loginControllers_1.default.getOneUsuario);
        this.router.post('/', loginControllers_1.default.createUser);
        this.router.post('/val', loginControllers_1.default.userValidate);
    }
}
exports.loginRoutes = new LoginRoutes();
exports.default = exports.loginRoutes.router;
