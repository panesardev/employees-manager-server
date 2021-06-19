import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {	
	constructor(private readonly service: EmployeeService) {}

	@Post('/')
	async create(@Body() employee: Employee) {
		return await this.service.create(employee);
	}

	@Patch('/:id')
	async update(@Param('id') id: string, @Body() employee: Employee) {
		return await this.service.update(id, employee);
	}

	@Delete('/:id')
	async delete(@Param('id') id: string) {
		return await this.service.delete(id);
	}

	@Get('/:id')
	async find(@Param('id') id: string) {
		return await this.service.find(id);
	}

	@Get('/')
	async findAll() {
		return await this.service.findAll();
	}
}