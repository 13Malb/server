import { PrismaService } from 'src/prisma.service';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTranactions(): Promise<{
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
    updateOrderStatus(id: any, status: any): Promise<{
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
