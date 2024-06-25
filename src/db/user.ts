import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const createdUser=await prisma.user.create({
        data:{
            username,
            password,
            name
        }
    })

    return createdUser;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const user=await prisma.user.findFirst({
        where:{
            id:userId
        }
    })

    return user;
}
