import { Controller, Get, Post, Body, Patch, Param, Delete,ParseUUIDPipe, HttpException,HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Transaction, User, Prisma,Address } from '@prisma/client';
import { TransactionsService } from './transactions/transactions.service';
import { OrdersService } from './orders/orders.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
              private readonly TransactionsService: TransactionsService,
              private readonly ordersService: OrdersService
            ) {}

  @Post()
  create(@Body() userData:User) {
    return this.usersService.create(userData);
  }

  @Post('address')
  createAddress(@Body() data:Address | any){
    return this.usersService.createAddress(data)
  }

  @Post('transactions')
  createPost(@Body() transactionData:Prisma.TransactionCreateInput ) {
    return this.TransactionsService.createPost(transactionData);
  }

  

  @Get()
  findAll(@Query('name') name?:String) {
    return this.usersService.findAll(name);
  }

  @Get('transactions')
  findallTransacts(){
    return this.TransactionsService.findallTransacts();
  }

  @Get(':id')
   async findOne(@Param('id',new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: string) {
    try {
      return this.usersService.findOne(id);
      
    } catch (error) {
       return new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Tranactions not found',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Get('transactions/:userId')
 async UniqueUserTransactions(@Param('userId') userId: String | any ){

    try {
      return this.TransactionsService.UniqueUserTransactions(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Tranactions not found',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Get('admin/orders')
  getAllTransactions(){
    return this.ordersService.getAllTranactions()
  }

  @Get('address/:userId')
  getUserAddress(@Param('userId') userId:string){
    return this.usersService.getUserAddress(userId)
  }

  @Patch('address/:id')
  updateAddress(@Param('id') id:string, @Body() data:Prisma.AddressUpdateInput){
    return this.usersService.updateAddress(id,data)
  }


  @Patch('orders/:id')
  updateOrderStatus(@Param('id',new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.NOT_FOUND})) id: string, @Body() status: Transaction ){
    return this.ordersService.updateOrderStatus(id,status)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Patch('transactions/update/:id')
  updateAllTransactions(@Param('id') id :String ,@Body() data:Prisma.TransactionUpdateInput){
     return this.TransactionsService.upAllTransactions(id,data)
  }


  @Delete('transactions/:id')
  deleteUniqueUserTranaction(@Param('id',new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id :String | any){
    return this.TransactionsService.deleteUniqueUserTranaction(id)
  }
  @Delete(`transactions/all/:userId`)
  deleteAllTransactions(@Param('userId') userId:String | any){
    return this.TransactionsService.deleteAllTransactions(userId)
  }
}
