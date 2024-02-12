// const { PrismaAdapter } = require("@auth/prisma-adapter");
// const prisma = require("@/lib/prisma");
// const GoogleProvider = require("next-auth/providers/google");
// const NextAuth = require("next-auth");

// const { getServerSession } = require("next-auth");
// const { GetServerSidePropsContext, NextApiRequest, NextApiResponse } = require("next");

// const config = {
//   pages: {
//     signIn: "/login",
//   },
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//         session.user.username = token.username;
//       }

//       return session;
//     },
//     async jwt({ token, user }) {
//       const prismaUser = await prisma.user.findFirst({
//         where: {
//           email: token.email,
//         },
//       });

//       if (!prismaUser) {
//         token.id = user.id;
//         return token;
//       }
//       if (!prismaUser.username) {
//         await prisma.user.update({
//           where: {
//             id: prismaUser.id,
//           },
//           data: {
//             username: prismaUser.name ? prismaUser.name.split(" ").join("").toLowerCase() : null,
//           },
//         });
//       }

//       return {
//         id: prismaUser.id,
//         name: prismaUser.name,
//         email: prismaUser.email,
//         username: prismaUser.username,
//         picture: prismaUser.image,
//       };
//     },
//   },
// };

// module.exports = NextAuth.default(config);

// // Use it in server contexts
// function auth(...args) {
//   return getServerSession(...args, config);
// }

// module.exports.auth = auth;
