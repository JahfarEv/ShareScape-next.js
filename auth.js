const { PrismaAdapter } = require("@auth/prisma-adapter");
const { NextAuthOptions } = require("next-auth");

const config = {
  pages: {
    signIn: '/login'
  },
  adapter: PrismaAdapter(prisma)
};

module.exports = { config, satisfies: NextAuthOptions };
