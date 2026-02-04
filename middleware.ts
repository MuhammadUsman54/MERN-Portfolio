import { NextRequest, NextResponse } from "next/server";

const ADMIN_PATH = "/admin";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith(ADMIN_PATH)) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    return new NextResponse("Admin password missing", { status: 500 });
  }

  if (!authHeader) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic realm=Admin" },
    });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, providedPassword] = credentials.split(":");

  if (username !== "admin" || providedPassword !== password) {
    return new NextResponse("Invalid credentials", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic realm=Admin" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
