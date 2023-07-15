import { useRef, useState } from "react";
import { transformWinPrizeItem } from "./transform";

export function useLuckDraw() {
  const progressIndex = [0, 1, 2, 5, 8, 7, 6, 3];
  const [prizeIndex, setPrizeIndex] = useState<number>(3); // 中奖高亮的key
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const speed = [50, 300]; // 速度 ms 单位 滚动速度从快到慢
  const speedLevel = useRef<number>(0); // 速度等级 => 对应的speed的下标

  const changeSpeed = (
    tickIndex: number,
    timer: number,
    fn: (tickIndex: number) => void
  ) => {
    const interval = setInterval(() => {
      if (tickIndex >= progressIndex.length) {
        tickIndex = 0;
      }
      setPrizeIndex(progressIndex[tickIndex]);
      tickIndex++;
    }, speed[speedLevel.current]);
    setTimeout(() => {
      clearInterval(interval);
      fn?.(tickIndex);
    }, timer);
  };

  const draw = ({
    prizeKey,
    onFinish,
  }: {
    prizeKey: number;
    onFinish: () => void;
  }) => {
    const layoutKey = transformWinPrizeItem(prizeKey);
    setIsDrawing(true);
    let tickIndex = 0;
    // 中奖格子移动一格
    const nextPrize = () => {
      if (tickIndex >= progressIndex.length) {
        tickIndex = 0;
      }
      setPrizeIndex(progressIndex[tickIndex]);
      tickIndex++;
    };

    // 检查操作
    const diffCheck = () => {
      if (tickIndex !== layoutKey) {
        nextPrize();
        setTimeout(() => {
          diffCheck();
        }, speed[speedLevel.current]);
      } else {
        setIsDrawing(false);
        speedLevel.current = 0;
        setPrizeIndex(progressIndex[tickIndex]);
        onFinish?.();
      }
    };

    changeSpeed(tickIndex, 4000, (_tickIndex: number) => {
      // diffCheck();  如果不考虑速度的切换 就在结束后调用这个方法即可
      speedLevel.current += 1;
      changeSpeed(_tickIndex, 2000, (__tickIndex) => {
        tickIndex = __tickIndex;
        setTimeout(() => {
          diffCheck();
        }, speed[speedLevel.current]);
      });
    });
  };

  return {
    prizeIndex,
    isDrawing,
    draw,
  };
}
