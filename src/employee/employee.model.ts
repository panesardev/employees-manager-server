import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Employee {
	id: string;
	firstName: string;
	lastName: string;
	dob: Date;
	age: number;
	gender: 'm' | 'f';
	jobTitle: string;
}

export type EmployeeDoc = Employee & Document;

@Schema()
export class EmployeeModel {
	@Prop({ required: true })
	id: string;
	
	@Prop({ required: true })
	firstName: string;
	
	@Prop({ required: true })
	lastName: string;
	
	@Prop({ required: true })
	dob: Date;
	
	@Prop({ required: true })
	age: number;
	
	@Prop({ required: true })
	gender: 'm' | 'f';
	
	@Prop({ required: true })
	jobTitle: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeModel);