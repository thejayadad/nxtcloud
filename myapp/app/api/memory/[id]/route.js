import db from "@/lib/db";
import Memory from "@/model/Memory";

export async function DELETE(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    try {
        const memory = await Memory.findById(id)
   
        await Memory.findByIdAndDelete(id)

        return new Response(JSON.stringify({msg: 'Successfully deleted Memory'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 }) 
    }
}