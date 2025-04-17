import { Product } from "../../../models/product";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const fetchProducts = await Product.find({});
    return NextResponse.json({ status: 200, data: fetchProducts });
  } catch (err) {
    console.log(err);
    NextResponse.json({ status: 400, message: "something went wrong" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, price } = await req.json();
    if (!name || !price) {
      NextResponse.json({ status: 400, meessage: "Name or price not set" });
    }
    const addProuduct = new Product({
      name: name,
      price: price,
    });
    return NextResponse.json({ status: 200, message: "Products added" });
    await addProuduct.save();
  } catch (err) {
    console.log(err);
  }
}
