import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: {
        email: string;
        password: string;
    }): any;
    login(body: {
        email: string;
        password: string;
    }): any;
}
