import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';
import { SoapModule } from 'nestjs-soap';

@Module({
  imports: [
    SoapModule.forRoot({
      clientName: 'CALCULATOR_CLIENT',
      uri: 'http://www.dneonline.com/calculator.asmx?wsdl',
    }),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
