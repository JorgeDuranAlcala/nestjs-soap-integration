import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('methods')
  getMethods() {
    return this.calculatorService.getMethods();
  }

  @Get('add')
  async add(@Query('a') a: number, @Query('b') b: number): Promise<number> {
    return this.calculatorService.add(+a, +b);
  }

  @Get('substract')
  async substract(@Query('a') a: number, @Query('b') b: number): Promise<number> {
    return this.calculatorService.substract(+a, +b);
  }

  @Get('multiply')
  async multiply(@Query('a') a: number, @Query('b') b: number): Promise<number> {
    return this.calculatorService.multiply(+a, +b);
  }

  @Get('divide')
  async divide(@Query('a') a: number, @Query('b') b: number): Promise<number> {
    return this.calculatorService.divide(+a, +b);
  }
}