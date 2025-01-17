// models/Salarié.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IEmployee extends Document {
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  address: string;
  created_at?: Date;
  updated_at?: Date;
}

const employeeSchema: Schema = new Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Employee = mongoose.model<IEmployee>('Employee', employeeSchema);
export default Employee;
