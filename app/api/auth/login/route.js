import { connectToDb } from '@/utils/database';
import bcrypt from 'bcrypt';

import User from '@/models/user';

export const POST = async (req) => {
    const { username, password } = await req.json();

    await connectToDb();

    const userExists = await User.findOne({username});

    if (!userExists) {
        console.log('User not found');
        console.log('Creating user credentials');

        bcrypt.hash(password, 10, function(err, hash) {
            User.create({
                username,
                password: hash,
            });
        });

        return new Response(null, { status: 404 });
    }

    const match = await bcrypt.compare(password, userExists.password);

    if (!match) {
        return new Response(null, { status: 401 });
    }

    // Remove password when retrieving
    // Check how to implement guarded from Laravel models
    return new Response(JSON.stringify(userExists), { status: 200 });
} 