import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'src/prisma.service'
import { Prisma } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class InventoriesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.InventoryCreateInput) {
    return this.prisma.inventory.create({data,});
  }

  createMany(data){
    return this.prisma.inventory.createMany({data})
  }

   async findAll(name) {
    if(!name){
      return this.prisma.inventory.findMany()
    }
    
     
    return this.prisma.inventory.findMany({
      where:{
        name: `${name}`,
       
      }
    })
  }

  findOne(id) {
     if(!id){
      throw new Error('Item does not exist please check your ID input')
     }
    return this.prisma.inventory.findUnique({
      where:{
        id: `${id}`
      }
    });
  }

  update(id,data:Prisma.InventoryUpdateInput) {
    if(!id){
      throw new Error("Check your id item not found")
    };

    return this.prisma.inventory.update({
      where:{
        id:`${id}`
      },
      data:{
        name:data.name,
        imageUrl:data.imageUrl,
        category:data.category,
        description:data.description,
        price:data.price,
        available:data.available,
        rating:data.rating

      }
    })
  }

  remove(id: string) {
    if(!id){
      return null
    }
    return this.prisma.inventory.delete({
      where:{
        id:`${id}`
      }
    });
  }
  
  getUniqueAll(category:String){
    if(!category){
         return this.prisma.inventory.findMany()
    }
    return this.prisma.inventory.findMany({
      where:{
        category:`${category}`
      }
    })
  }


}
