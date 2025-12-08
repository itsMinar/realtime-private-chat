'use client';

import { useParams } from 'next/navigation';

export default function RoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;

  return (
    <div>
      <h3>RoomId is {roomId}</h3>
    </div>
  );
}
