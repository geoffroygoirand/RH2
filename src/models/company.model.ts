// models/Entreprise.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface for the Company document
interface ICompany extends Document {
  name: string;
  address: string;
  sectors: string[];
  users: mongoose.Types.ObjectId[];
  created_at: Date;
  updated_at: Date;
}

// Company schema
const companySchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  sectors: [{ type: String, required: true }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Company model
const Company = mongoose.model<ICompany>('Company', companySchema);

export default Company;
