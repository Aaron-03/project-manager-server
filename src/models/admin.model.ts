import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasOne } from 'sequelize-typescript';
import User from './user.model';


@Table({ tableName: 'tb_admins', timestamps: true })
export default class Admin extends Model<Admin> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'admin_id' })
    adminId:number;

    @Column({ field: 'user_id' })
    // @HasOne(() => User)
    userId:number;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    name:string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    lastname:string;

    @CreatedAt
    creationDate: Date;
    
    @UpdatedAt
    updatedOn: Date;
}

