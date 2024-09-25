import { HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { Transaction, User, Prisma, Address } from '@prisma/client';
import { TransactionsService } from './transactions/transactions.service';
import { OrdersService } from './orders/orders.service';
export declare class UsersController {
    private readonly usersService;
    private readonly TransactionsService;
    private readonly ordersService;
    constructor(usersService: UsersService, TransactionsService: TransactionsService, ordersService: OrdersService);
    create(userData: User): Prisma.Prisma__UserClient<{
        id: string;
        clerkUserId: string;
        email: string;
        name: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createAddress(data: Address | any): Prisma.Prisma__AddressClient<{
        id: string;
        city: string;
        suburb: string;
        street: string;
        userId: string;
        phoneNumber: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createPost(transactionData: Prisma.TransactionCreateInput): Prisma.Prisma__TransactionClient<{
        id: string;
        name: string;
        productId: string;
        amount: string;
        category: string | null;
        description: string | null;
        status: string | null;
        totalPrice: string | null;
        userId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(name?: String): Promise<{
        id: string;
        clerkUserId: string;
        email: string;
        name: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findallTransacts(): Prisma.PrismaPromise<{
        id: string;
        name: string;
        productId: string;
        amount: string;
        category: string | null;
        description: string | null;
        status: string | null;
        totalPrice: string | null;
        userId: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        clerkUserId: string;
        email: string;
        name: string;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | HttpException>;
    UniqueUserTransactions(userId: String | any): Promise<{
        id: string;
        name: string;
        productId: string;
        amount: string;
        category: string | null;
        description: string | null;
        status: string | null;
        totalPrice: string | null;
        userId: string;
        createdAt: Date;
    }[]>;
    getAllTransactions(): Promise<{
        id: string;
        name: string;
        productId: string;
        amount: string;
        category: string | null;
        description: string | null;
        status: string | null;
        totalPrice: string | null;
        userId: string;
        createdAt: Date;
    }[]>;
    getUserAddress(userId: string): Prisma.PrismaPromise<{
        id: string;
        city: string;
        suburb: string;
        street: string;
        userId: string;
        phoneNumber: number;
        createdAt: Date;
    }[]>;
    updateAddress(id: string, data: Prisma.AddressUpdateInput): Promise<{
        id: string;
        city: string;
        suburb: string;
        street: string;
        userId: string;
        phoneNumber: number;
        createdAt: Date;
    } | HttpStatus.FORBIDDEN>;
    updateOrderStatus(id: string, status: Transaction): Promise<{
        id: string;
        name: string;
        productId: string;
        amount: string;
        category: string | null;
        description: string | null;
        status: string | null;
        totalPrice: string | null;
        userId: string;
        createdAt: Date;
    }>;
    remove(id: string): string;
    updateAllTransactions(id: String, data: Prisma.TransactionUpdateInput): Promise<Prisma.BatchPayload>;
    deleteUniqueUserTranaction(id: String | any): Promise<{
        id: string;
        name: string;
        productId: string;
        amount: string;
        category: string | null;
        description: string | null;
        status: string | null;
        totalPrice: string | null;
        userId: string;
        createdAt: Date;
    }>;
    deleteAllTransactions(userId: String | any): Prisma.PrismaPromise<Prisma.BatchPayload>;
}
