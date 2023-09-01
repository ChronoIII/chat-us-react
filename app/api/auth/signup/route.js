import { connectToDb } from '@/utils/database';
import bcrypt from 'bcrypt';

import User from '@/models/user';

export const POST = async (req) => {
    const { username, password, first_name, last_name } = await req.json();

    await connectToDb();

    try {
        await bcrypt.hash(password, 10, (err, hash) => {
            User.create({
                username,
                password: hash,
                first_name: first_name,
                last_name: last_name,
                picture: null,
            });
        });

        return new Response(null, { status: 201 });
    } catch (e) {
        console.log(e);

        return new Response(null, { status: 500 });
    }
}