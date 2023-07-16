import db from "@/lib/db";
import Memory from "@/model/Memory";

export async function GET(req) {
    await db.connect()

    try {
        const memories = await Memory.find({})
        return new Response(JSON.stringify(memories), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function POST(req) {
    await db.connect()

    try {
        const body = await req.json()
        const newMemory = await Memory.create(body)

        return new Response(JSON.stringify(newMemory), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}