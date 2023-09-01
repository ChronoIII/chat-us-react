import { getServerSession } from 'next-auth';
import { connectToDb } from '@/utils/database';
import User from '@/models/user';

export const GET = async (req, { params }) => {
    const session = await getServerSession();
    if (!session || !session.user) {
        return new Response('Unauthorized', { status: 401 });
    }

    await connectToDb();

    const userData = await User.findById(params.id);

    if (!userData) {
        return new Response(null, { status: 404 });
    }
    return new Response(JSON.stringify(userData), { status: 200 });
}

export const PUT = async (req, { params }) => {
    
}

export const DELETE = async (req, { params }) => {

}