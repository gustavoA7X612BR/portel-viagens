import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");

    // Evita que qualquer pessoa force o revalidate
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Acesso negado" }, { status: 401 });
    }

    // Revalida a página principal
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/revalidate-path`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/" }),
    });

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: "Erro ao revalidar", error: err }, { status: 500 });
  }
}
