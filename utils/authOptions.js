import CredentialsProvider from 'next-auth/providers/credentials';

export default {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',

            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password'
                },
            },

            async authorize(cred, req) {
                const res = await fetch('http://localhost:3000/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: cred.username,
                        password: cred.password,
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                
                const user = await res.json();
                
                if (res.ok && user) {
                    return user;
                }
                return null;
            },

            pages: {
                signIn: '/'
            },
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user._id;
                token.username = user.username;
            }
            return token;
        },

        async session({token, session}) {
            if (token) {
                session.user.id = token.id;
                session.user.username = token.username;
            }
            
            return session;
        }
    }
}