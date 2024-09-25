import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
export declare class InventoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.InventoryCreateInput): Prisma.Prisma__InventoryClient<{
        id: string;
        name: string;
        imageUrl: string;
        description: string | null;
        price: number;
        category: string;
        qty: string | null;
        available: boolean | null;
        rating: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createMany(data: any): Prisma.PrismaPromise<Prisma.BatchPayload>;
    findAll(name: any): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        description: string | null;
        price: number;
        category: string;
        qty: string | null;
        available: boolean | null;
        rating: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: any): Prisma.Prisma__InventoryClient<{
        id: string;
        name: string;
        imageUrl: string;
        description: string | null;
        price: number;
        category: string;
        qty: string | null;
        available: boolean | null;
        rating: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: any, data: Prisma.InventoryUpdateInput): Prisma.Prisma__InventoryClient<{
        id: string;
        name: string;
        imageUrl: string;
        description: string | null;
        price: number;
        category: string;
        qty: string | null;
        available: boolean | null;
        rating: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__InventoryClient<{
        id: string;
        name: string;
        imageUrl: string;
        description: string | null;
        price: number;
        category: string;
        qty: string | null;
        available: boolean | null;
        rating: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getUniqueAll(category: String): Prisma.PrismaPromise<{
        id: string;
        name: string;
        imageUrl: string;
        description: string | null;
        price: number;
        category: string;
        qty: string | null;
        available: boolean | null;
        rating: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
