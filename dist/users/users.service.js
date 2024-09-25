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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const console_1 = require("console");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.user.create({
            data,
        });
    }
    createAddress(data) {
        return this.prisma.address.create({
            data,
        });
    }
    async updateAddress(id, data) {
        if (!id) {
            return common_1.HttpStatus.FORBIDDEN;
        }
        return this.prisma.address.update({
            where: {
                id: id
            },
            data: {
                city: data?.city,
                suburb: data?.suburb,
                street: data?.street,
                phoneNumber: data?.phoneNumber
            }
        });
    }
    getUserAddress(userId) {
        if (!userId) {
            throw new console_1.error('Oops add userId or load in user address', common_1.HttpStatus.NOT_FOUND);
        }
        return this.prisma.address.findMany({
            where: {
                userId: `${userId}`
            }
        });
    }
    async findAll(name) {
        if (!name) {
            return this.prisma.user.findMany();
        }
        return this.prisma.user.findMany({
            where: {
                name: `${name}`
            }
        });
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: {
                id: `${id}`
            }
        });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map