import NextAuth from "next-auth/next"
import { authOptions } from "@/auth";

const handler = NextAuth(authOptions);

module.exports = { GET: handler, POST: handler };   