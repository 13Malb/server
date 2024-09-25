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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const client_1 = require("@prisma/client");
const transactions_service_1 = require("./transactions/transactions.service");
const orders_service_1 = require("./orders/orders.service");
let UsersController = class UsersController {
    constructor(usersService, TransactionsService, ordersService) {
        this.usersService = usersService;
        this.TransactionsService = TransactionsService;
        this.ordersService = ordersService;
    }
    create(userData) {
        return this.usersService.create(userData);
    }
    createAddress(data) {
        return this.usersService.createAddress(data);
    }
    createPost(transactionData) {
        return this.TransactionsService.createPost(transactionData);
    }
    findAll(name) {
        return this.usersService.findAll(name);
    }
    findallTransacts() {
        return this.TransactionsService.findallTransacts();
    }
    async findOne(id) {
        try {
            return this.usersService.findOne(id);
        }
        catch (error) {
            return new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Tranactions not found',
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
    async UniqueUserTransactions(userId) {
        try {
            return this.TransactionsService.UniqueUserTransactions(userId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Tranactions not found',
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
    getAllTransactions() {
        return this.ordersService.getAllTranactions();
    }
    getUserAddress(userId) {
        return this.usersService.getUserAddress(userId);
    }
    updateAddress(id, data) {
        return this.usersService.updateAddress(id, data);
    }
    updateOrderStatus(id, status) {
        return this.ordersService.updateOrderStatus(id, status);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
    updateAllTransactions(id, data) {
        return this.TransactionsService.upAllTransactions(id, data);
    }
    deleteUniqueUserTranaction(id) {
        return this.TransactionsService.deleteUniqueUserTranaction(id);
    }
    deleteAllTransactions(userId) {
        return this.TransactionsService.deleteAllTransactions(userId);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('address'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createAddress", null);
__decorate([
    (0, common_1.Post)('transactions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('transactions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findallTransacts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('transactions/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "UniqueUserTransactions", null);
__decorate([
    (0, common_1.Get)('admin/orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllTransactions", null);
__decorate([
    (0, common_1.Get)('address/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserAddress", null);
__decorate([
    (0, common_1.Patch)('address/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.Patch)('orders/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateOrderStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('transactions/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateAllTransactions", null);
__decorate([
    (0, common_1.Delete)('transactions/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUniqueUserTranaction", null);
__decorate([
    (0, common_1.Delete)(`transactions/all/:userId`),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteAllTransactions", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        transactions_service_1.TransactionsService,
        orders_service_1.OrdersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map