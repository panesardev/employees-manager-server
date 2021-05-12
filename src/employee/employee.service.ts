import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './employee.model';
import { EmployeeDoc, EmployeeModel } from './employee.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EmployeeService {
	constructor(@InjectModel(EmployeeModel.name) private EmployeeDoc: Model<EmployeeDoc>) {}

	async create(employee: Employee): Promise<Employee[]> {
		employee.id = uuid().toString();
		await new this.EmployeeDoc(employee).save();
		return this.findAll();
	}

	async update(id: string, employee: Employee): Promise<Employee[]> {
		await this.EmployeeDoc.updateOne({ id }, { ...employee }).exec();
		return this.findAll();
	}

	async find(id: string): Promise<Employee> {
		return this.EmployeeDoc.findOne({ id }).exec();
	}
	
	async findAll(): Promise<Employee[]> {
		return this.EmployeeDoc.find().exec();
	}
	
	async delete(id: string): Promise<Employee[]> {
		await this.EmployeeDoc.deleteOne({ id }).exec();
		return this.findAll();
	}
	
}
