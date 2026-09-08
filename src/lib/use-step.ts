import { useCallback, useEffect, useState } from "react";

export function useStep(key: string, total: number) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw == null) return;
      const n = Number(raw);
      if (Number.isFinite(n)) setStep(Math.min(total - 1, Math.max(0, n)));
    } catch {
      /* ignore */
    }
  }, [key, total]);

  const onStep = useCallback(
    (next: number) => {
      const clamped = Math.min(total - 1, Math.max(0, next));
      setStep(clamped);
      try {
        localStorage.setItem(key, String(clamped));
      } catch {
        /* ignore */
      }
    },
    [key, total],
  );

  return [step, onStep] as const;
}
