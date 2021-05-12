import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {	
	constructor(private readonly service: EmployeeService) {}

	@Post()
	async create(@Body() employee: Employee) {
		return await this.service.create(employee);
	}

	@Put('/:id')
	async update(@Param('id') id: string, @Body() employee: Employee) {
		return await this.service.update(id, employee);
	}
	
	@Get()
	async findAll() {
		return await this.service.findAll();
	}

	@Get('/:id')
	async find(@Param('id') id: string) {
		return await this.service.find(id);
	}

	@Delete('/:id')
	async delete(@Param('id') id: string) {
		return await this.service.delete(id);
	}
}