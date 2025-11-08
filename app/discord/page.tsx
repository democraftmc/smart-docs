'use client';

import { useEffect } from 'react';

export default function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/utJYSHx9JF';
  }, []);

  return <div>Redirecting to Discord...</div>;
}