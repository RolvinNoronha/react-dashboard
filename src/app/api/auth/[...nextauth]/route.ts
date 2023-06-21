import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/github";


export const authOptions = {  
    
    providers: [    
        GoogleProvider({      
            clientId: process.env.GOOGLE_CLIENT_ID as string,      
            clientSecret: process.env.GOOGLE_SECRET as string,    
        }),    
    ],
}

const Handler = NextAuth(authOptions)

export { Handler as GET, Handler as POST };