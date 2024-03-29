const { PrismaClient } = require("@prisma/client");

global.prisma = global.prisma || new PrismaClient();
const prisma = global.prisma;

if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}

module.exports = prisma;