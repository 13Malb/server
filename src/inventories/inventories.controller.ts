import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Controller('inventory')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Post()
  create(@Body() data:Inventory) {
    return this.inventoriesService.create(data);
  }
  @Post('many')
  createMany(@Body() data:Prisma.AddressCreateManyInput){
    return this.inventoriesService.createMany(data)

  }

  @Get()
  findAll(@Query('name') name:String) {
    return this.inventoriesService.findAll(name);
  }

  @Get()
  getUniqueAll(@Query('category') category:String){
    return this.inventoriesService.getUniqueAll(category)
  }

  @Get(':id')
  findOne(@Param('id' , new ParseUUIDPipe()) id: string) {
    return this.inventoriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id' , new ParseUUIDPipe()) id: string, @Body() data:Prisma.InventoryUpdateInput) {
    return this.inventoriesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.inventoriesService.remove(id);
  }
}
