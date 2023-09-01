import { getServerSession } from 'next-auth';
import authOptions from '@/utils/authOptions';

import Login from '@/components/Login';
import Homepage from '@/components/Home';

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
      session == null
      ? (
        <Login />
      ) : (
        <Homepage user={session.user} />
      )
  );
}
