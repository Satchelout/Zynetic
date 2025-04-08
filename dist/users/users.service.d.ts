import { User } from './user.entity';
export declare class UsersService {
    private users;
    registered_User(email: string, password: string): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    validateUser(email: string, password: string): Promise<User | null>;
}
