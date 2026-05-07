import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "MongoDB 연결 성공! ✅" });
  } catch (error) {
    return NextResponse.json({ message: "연결 실패 ❌", error }, { status: 500 });
  }
}