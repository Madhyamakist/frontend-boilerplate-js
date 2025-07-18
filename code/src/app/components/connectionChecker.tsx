
'use client';
import useNetworkStatus from "../hooks/useNetworkStatus";

export default function ConnectionChecker() {
  const isOnline = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div className="bg-red-600 text-white text-sm text-center py-2 px-2">
      <p>You are offline. Some features may not work properly.</p>
    </div>
  );
}
