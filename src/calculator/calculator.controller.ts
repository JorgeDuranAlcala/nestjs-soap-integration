import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add')
  async add(@Query('a') a: number, @Query('b') b: number): Promise<number> {
    return this.calculatorService.add(+a, +b);
  }

  @Get('substract')
  async substract(@Query('a') a: number, @Query('b') b: number): Promise<number> {
    return this.calculatorService.substract(+a, +b);
  }
}
