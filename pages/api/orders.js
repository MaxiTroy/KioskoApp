import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    console.log(req.body);
    const order = await prisma.order.create({
      data: {
        name: req.body.name,
        order: req.body.order,
        total: req.body.total,
        date: req.body.date,
      },
    });
    res.json(order);
  }
}
