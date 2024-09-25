import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(data: Prisma.TransactionCreateInput): Prisma.Prisma__TransactionClient<{
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
    UniqueUserTransactions(userId: Number | string): Promise<{
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
    deleteAllTransactions(userId: String): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upAllTransactions(userId: String, data: Prisma.TransactionUpdateInput): Promise<Prisma.BatchPayload>;
    deleteUniqueUserTranaction(id: string): Promise<{
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
}
