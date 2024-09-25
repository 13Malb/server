import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma.service';
import { TransactionsService } from './transactions/transactions.service';
import { OrdersService } from './orders/orders.service';


@Module({
  controllers: [UsersController],
  providers: [UsersService,PrismaService, TransactionsService, OrdersService],
})
export class UsersModule {}
