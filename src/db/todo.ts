import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const createdTodo=await prisma.todo.create({
        data:{
            userId,
            title,
            description
        }
        
    })
    return createdTodo;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updatedTodo=prisma.todo.update({
        where:{
            id:todoId
        },
        data:{
            done:true
        }
    })

    return updatedTodo;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const todos=await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })

    return todos;
}