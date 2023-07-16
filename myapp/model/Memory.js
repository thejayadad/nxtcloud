import mongoose from "mongoose";

const MemorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {timestamps: true})

export default mongoose?.models?.Memory || mongoose.model("Memory", MemorySchema)