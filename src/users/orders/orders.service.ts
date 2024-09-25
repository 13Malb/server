import { Injectable } from '@nestjs/common';
import { Transaction, Prisma } from '@prisma/client';
import { promises } from 'fs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  
   async getAllTranactions(){
    return this.prisma.transaction.findMany()
   }

   async updateOrderStatus(id,status){
        return this.prisma.transaction.update({
            where:{
                id:`${id}`
            },
            data:{ status:`${status.status}`}
        })
    

   }
}
