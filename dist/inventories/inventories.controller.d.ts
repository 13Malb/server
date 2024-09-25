import { InventoriesService } from './inventories.service';
import { Inventory } from '@prisma/client';
import { Prisma } from '@prisma/client';
export declare class InventoriesController {
    private readonly inventoriesService;
    constructor(inventoriesService: InventoriesService);
    create(data: Inventory): Prisma.Prisma__InventoryClient<{
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
    createMany(data: Prisma.AddressCreateManyInput): Prisma.PrismaPromise<Prisma.BatchPayload>;
    findAll(name: String): Promise<{
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
    findOne(id: string): Prisma.Prisma__InventoryClient<{
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
    update(id: string, data: Prisma.InventoryUpdateInput): Prisma.Prisma__InventoryClient<{
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
}
