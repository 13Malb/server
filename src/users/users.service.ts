import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}


  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  createAddress(data:Prisma.AddressCreateInput){
         return this.prisma.address.create({
          data,
         })
  }

 async updateAddress(id:string,data:Prisma.AddressUpdateInput ){
        if(!id){
          return HttpStatus.FORBIDDEN
        }

        return this.prisma.address.update({
          where:{
            id: id
          },
          data:{
            city:data?.city,
            suburb:data?.suburb,
            street:data?.street,
            phoneNumber:data?.phoneNumber
          }
        })
 }

  getUserAddress(userId: string){
    if (!userId) {
      throw new error('Oops add userId or load in user address', HttpStatus.NOT_FOUND)
    }

     return this.prisma.address.findMany({
      where:{
        userId: `${userId}`
      }
     })
  }

  async findAll(name) {
     if (!name) {
      return this.prisma.user.findMany()
     }


       return this.prisma.user.findMany({
         where:{
           name:`${name}`
         }
       });
     
  }

  findOne(id: String ) {
    return this.prisma.user.findUnique({
      where:{
        id:`${id}`
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
