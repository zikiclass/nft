import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req) {
  try {
    const admin = await prisma.administrators.aggregate({
      _count: { email: true },
    });
    const NFT = await prisma.nftdrop.aggregate({
      _count: { id: true },
    });
    if (admin && NFT) {
      return NextResponse.json({ admin, NFT }, { status: 200 });
    } else {
      return NextResponse.json("Unable to get request", { status: 404 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error" + error, { status: 500 });
  }
}
