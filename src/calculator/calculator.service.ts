import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'soap';

@Injectable()
export class CalculatorService {
  constructor(@Inject('CALCULATOR_CLIENT') private readonly client: Client) {}

  async add(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
      this.client.Add({ intA: a, intB: b }, (err, result) => {
        resolve(result.AddResult);
      });
    });
  }

  async substract(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
      this.client.Subtract({ intA: a, intB: b }, (err, result) => {
        resolve(result.SubtractResult);
      })
    })
  }
}
