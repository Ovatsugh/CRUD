import mongoose from "mongoose";

async function main() {
    await mongoose.connect('mongodb://localhost:27017/personalProject')
    console.log("Database Conectada")
}

main().catch((err) => console.log(`Aconteceu um erro ${err}`))

export default mongoose