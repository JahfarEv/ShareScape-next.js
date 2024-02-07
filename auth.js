const { PrismaAdapter } = require("@auth/prisma-adapter");
const { NextAuthOptions } = require("next-auth");
const prisma = require('@/lib/prisma')
import GoogleProvider from "next-auth/providers/google";


const config = {
  pages: {
    signIn: '/login'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  session: {
    strategy:"jwt",
  },
  callbacks: {
    async session({session,token}){
      if(token){
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      return session
    }
  }
    

    
};

module.exports = { config, satisfies: NextAuthOptions };
