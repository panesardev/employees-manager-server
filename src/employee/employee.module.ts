import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModel, EmployeeSchema } from './employee.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmployeeModel.name, schema: EmployeeSchema },
    ])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
