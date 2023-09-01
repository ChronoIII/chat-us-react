import { connectToDb } from '@/utils/database';
import Message from '@/models/message';
import { getServerSession } from 'next-auth';
import authOptions from '@/utils/authOptions';

export const GET = async (req, {params}) => {
    let session = await getServerSession(authOptions);
    if (!session) {
        return new Response(null, { status: 401 });
    }

    await connectToDb();

    let getParams = req.nextUrl.searchParams;
    let findWhere = null;
    if (getParams.get('friendId')) {
        findWhere =  {
            $or: [
                { 
                    $and: [
                        {sourceId: params.id}, 
                        {targetId: getParams.get('friendId')}
                    ] 
                },
                { $and: 
                    [
                        {sourceId: getParams.get('friendId')}, 
                        {targetId: params.id}
                    ] 
                },
            ]
        };
    }

    const messages = await Message
        .find(findWhere)
        .sort({ timestamp: 'asc' })
        .exec()

    return new Response(JSON.stringify(messages), { status: 200 });
}

export const POST = async (req, {params}) => {
    let session = await getServerSession(authOptions);
    if (!session) {
        return new Response(null, { status: 401 });
    }

    await connectToDb();

    let { content, to } = await req.json();

    let message = await Message.create({
        content: content,
        sourceId: params.id,
        targetId: to,
    })
    
    return new Response(JSON.stringify(message), { status: 201 });
}