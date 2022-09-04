import prisma from "../../../lib/prisma"

export default async function handler(req, res){
    if(req.method === 'POST'){
        await prisma.customer.create({
            data:{
                email:req.body.email
            }
        })
        res.json({
            message:"Thank you for subscribing"
        })
    }

    if(req.method === "GET"){
        res.json(await prisma.customer.findMany())
    }
    else{
        res.send("Message")
    }
}