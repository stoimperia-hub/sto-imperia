import { useRef } from "react";

type UseSwipeOpts = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;       // пиксели
  velocity?: number;        // px/ms
};

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  threshold = 48,
  velocity = 0.4,           // ~0.4 px/ms = 400 px/сек
}: UseSwipeOpts) {
  const startX = useRef(0);
  const startY = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const dragging = useRef(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // игнорируем мультитач
    if (!e.isPrimary) return;
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    startX.current = e.clientX;
    startY.current = e.clientY;
    lastX.current = e.clientX;
    lastT.current = e.timeStamp;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;

    // ось-лок: если вертикаль преобладает — ничего не делаем, оставляем странице скролл
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    if (Math.abs(dy) > Math.abs(dx)) return;

    // обновим последнее положение для скорости
    lastX.current = e.clientX;
    lastT.current = e.timeStamp;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;

    const totalDx = e.clientX - startX.current;
    const totalDy = e.clientY - startY.current;
    const dt = Math.max(1, e.timeStamp - lastT.current); // мс
    const vx = (e.clientX - lastX.current) / dt;         // px/ms

    // свайп засчитываем, только если горизонталь явная
    if (Math.abs(totalDx) < Math.abs(totalDy)) return;

    const passedDistance = Math.abs(totalDx) >= threshold;
    const passedVelocity = Math.abs(vx) >= velocity;

    if (passedDistance || passedVelocity) {
      if (totalDx < 0) onSwipeLeft?.();
      else onSwipeRight?.();
    }
  };

  const onPointerCancel = () => {
    dragging.current = false;
  };

  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel };
}
