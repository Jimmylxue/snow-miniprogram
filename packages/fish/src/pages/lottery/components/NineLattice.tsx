import { memo } from "react";
import { TShowList } from "../core/types";
import { useLuckDraw } from "../core/draw";
import { PrizeItem } from "./PrizeItem";
import { View } from "@tarojs/components";

type TProps = {
  prizeLayoutList: TShowList;
};

export default memo(({ prizeLayoutList }: TProps) => {
  const { prizeIndex, draw, isDrawing } = useLuckDraw();

  return (
    <View
      className=" flex h-full flex-wrap justify-between items-end pb-6 mt-10"
      style={{
        width: "600rpx",
        height: "600rpx",
      }}
    >
      {prizeLayoutList.map((item, index) => (
        <PrizeItem
          item={item}
          key={index}
          index={index}
          prizeIndex={prizeIndex}
          onTouch={() => {
            if (item.itemType === "button") {
              if (!isDrawing) {
                const index = Math.floor(Math.random() * 8) + 1;
                draw(index);
              } else {
              }
            }
          }}
        />
      ))}
    </View>
  );
});
