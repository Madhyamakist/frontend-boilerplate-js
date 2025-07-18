'use client';
import { useEffect, useState } from 'react';

type Props = {
  loading: boolean;
};

export default function LoadingMessage({ loading }: Props) {
  const [slowLoading, setSlowLoading] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (loading) {
      timer = setTimeout(() => setSlowLoading(true), 5000);
    } else {
      setSlowLoading(false);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <>
      <p className="mt-6">Loading…</p>
      {slowLoading && (
        <p className="mt-2 text-sm text-yellow-600">
          Still working on it—this may take a few more seconds.
        </p>
      )}
    </>
  );
}
