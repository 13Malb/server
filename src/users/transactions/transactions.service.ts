import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {Transaction, Prisma } from '@prisma/client';



@Injectable()
export class TransactionsService {
    constructor(private prisma: PrismaService) {}

    createPost(data: Prisma.TransactionCreateInput) {
        return this.prisma.transaction.create({
          data,
        });
      }

      findallTransacts(){
        return this.prisma.transaction.findMany()
      }

    async  UniqueUserTransactions(userId: Number | string ){
      return this.prisma.transaction.findMany({
        where:{
          userId:`${userId}`
        }
      });
      }

      deleteAllTransactions(userId:String){
        return this.prisma.transaction.deleteMany({
          where:{
            userId:`${userId}`
          }
        })
      }

      async upAllTransactions(userId:String, data:Prisma.TransactionUpdateInput){
          return this.prisma.transaction.updateMany({
            where:{
              userId:`${userId}`
            },
            data:{
              status:`${data.status}`
            }
          })
      }

      async deleteUniqueUserTranaction(id:string){
      
          return this.prisma.transaction.delete({
            where:{
              id:`${id}`,
            }
          })
        
      }

     
}
