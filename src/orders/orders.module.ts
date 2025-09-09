import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';
import { NATS_SERVICE } from 'src/config/services';
import { NastModule } from 'src/transports/nast.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
   NastModule
  ]
})
export class OrdersModule { }
