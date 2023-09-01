import { connectToDb } from "@/utils/database";
import Friend from "@/models/friend";
import { getServerSession } from 'next-auth';
import authOptions from "@/utils/authOptions";

export const GET = async (req, {params}) => {
    let session = await getServerSession(authOptions);
    if (!session) {
        return new Response(null, { status: 401 });
    }

    await connectToDb();
    let query = await Friend.find({ userId: params.id })

    return new Response(JSON.stringify(query), { status: 200 });
}

export const POST = async (req, {params}) => {
    let session = await getServerSession(authOptions);
    if (!session) {
        return new Response(null, { status: 401 });
    }

    let { friendId } = await req.json();
    await connectToDb();

    let relationData = await Friend.findOne({
        $and: [
            { userId: params.id },
            { friendId: friendId },
        ]
    })
    
    if (relationData) {
        return new Response(true, { status: 200 });
    }

    await Friend.create({
        userId: params.id,
        friendId: friendId
    })

    return new Response(true, { status: 201 });
}