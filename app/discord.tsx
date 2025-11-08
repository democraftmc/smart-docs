import { useEffect } from 'react';

export default function DiscordRedirect() {
  useEffect(() => {
    // Redirect to the Discord invite link
    window.location.href = 'https://discord.gg/utJYSHx9JF';
  }, []);

  // Optional: Show a message while redirecting
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p>Redirecting to Discord...</p>
    </div>
  );
}
