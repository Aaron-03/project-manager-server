import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import Admin from './admin.model';


@Table({ tableName: 'tb_users', timestamps: true })
export default class User extends Model<User> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'user_id' })
    userId:number;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    kind:string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    email:string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    username:string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    password:string;

    // @HasMany(() => Admin)
    // admins: Admin[];

    @CreatedAt
    creationAt: Date;
    
    @UpdatedAt
    updatedAt: Date;
}

