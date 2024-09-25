"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let InventoriesService = class InventoriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.inventory.create({ data, });
    }
    createMany(data) {
        return this.prisma.inventory.createMany({ data });
    }
    async findAll(name) {
        if (!name) {
            return this.prisma.inventory.findMany();
        }
        return this.prisma.inventory.findMany({
            where: {
                name: `${name}`,
            }
        });
    }
    findOne(id) {
        if (!id) {
            throw new Error('Item does not exist please check your ID input');
        }
        return this.prisma.inventory.findUnique({
            where: {
                id: `${id}`
            }
        });
    }
    update(id, data) {
        if (!id) {
            throw new Error("Check your id item not found");
        }
        ;
        return this.prisma.inventory.update({
            where: {
                id: `${id}`
            },
            data: {
                name: data.name,
                imageUrl: data.imageUrl,
                category: data.category,
                description: data.description,
                price: data.price,
                available: data.available,
                rating: data.rating
            }
        });
    }
    remove(id) {
        if (!id) {
            return null;
        }
        return this.prisma.inventory.delete({
            where: {
                id: `${id}`
            }
        });
    }
    getUniqueAll(category) {
        if (!category) {
            return this.prisma.inventory.findMany();
        }
        return this.prisma.inventory.findMany({
            where: {
                category: `${category}`
            }
        });
    }
};
exports.InventoriesService = InventoriesService;
exports.InventoriesService = InventoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoriesService);
//# sourceMappingURL=inventories.service.js.map