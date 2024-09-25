import { HttpStatus } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Prisma.Prisma__UserClient<{
        id: string;
        clerkUserId: string;
        email: string;
        name: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createAddress(data: Prisma.AddressCreateInput): Prisma.Prisma__AddressClient<{
        id: string;
        city: string;
        suburb: string;
        street: string;
        userId: string;
        phoneNumber: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateAddress(id: string, data: Prisma.AddressUpdateInput): Promise<{
        id: string;
        city: string;
        suburb: string;
        street: string;
        userId: string;
        phoneNumber: number;
        createdAt: Date;
    } | HttpStatus.FORBIDDEN>;
    getUserAddress(userId: string): Prisma.PrismaPromise<{
        id: string;
        city: string;
        suburb: string;
        street: string;
        userId: string;
        phoneNumber: number;
        createdAt: Date;
    }[]>;
    findAll(name: any): Promise<{
        id: string;
        clerkUserId: string;
        email: string;
        name: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: String): Prisma.Prisma__UserClient<{
        id: string;
        clerkUserId: string;
        email: string;
        name: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
