import type { NextPage } from 'next'
import { useTrpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = useTrpc.useQuery(['tests.hello', { text: 'client' }]);
  console.log(hello);
 
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{JSON.stringify(hello.data)}</p>
    </div>
  );
}

export default Home
