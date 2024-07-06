import mongoose from "mongoose";

enum IUserRole {
    USER = 'user',
    ADMIN = 'admin'
}

interface IUser {
    _id: string;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: IUserRole;
    companies: string[];
    createdAt: Date;
    updatedAt: Date;
}

//TODO: add companies

const UserSchema = new mongoose.Schema<IUser>(
    {
        lastname: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: [IUserRole.ADMIN, IUserRole.USER],
            default: IUserRole.USER,
            required: true
        },
    }, {
        timestamps: true
    }   
)

export const UserModel = mongoose.model("users", UserSchema);
