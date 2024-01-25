import { PrismaClient } from '@prisma/client';

export const resetTables = async (database: PrismaClient) => {
    await database.userLesson.deleteMany();
    await database.user.deleteMany();
};