import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './employee.model';
import { EmployeeDoc, EmployeeModel } from './employee.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EmployeeService {
	constructor(@InjectModel(EmployeeModel.name) private EmployeeDoc: Model<EmployeeDoc>) {}

	async create(employee: Employee): Promise<Employee> {
		employee.id = uuid().toString();
		return new this.EmployeeDoc(employee).save();
	}

	async update(id: string, employee: Employee): Promise<any> {
		return this.EmployeeDoc.updateOne({ id }, { ...employee }).exec();
	}

	async find(id: string): Promise<Employee> {
		return this.EmployeeDoc.findOne({ id }).exec();
	}
	
	async findAll(): Promise<Employee[]> {
		return this.EmployeeDoc.find().exec();
	}
	
	async delete(id: string): Promise<any> {
		return this.EmployeeDoc.deleteOne({ id }).exec();
	}
	
}
