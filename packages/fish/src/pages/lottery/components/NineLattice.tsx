import { memo, useState } from "react";
import { TShowList } from "../core/types";
import { useLuckDraw } from "../core/draw";
import { PrizeItem } from "./PrizeItem";
import { View } from "@tarojs/components";
import { AtToast } from "taro-ui";
import "taro-ui/dist/style/components/toast.scss";

type TProps = {
  prizeLayoutList: TShowList;
};

export default memo(({ prizeLayoutList }: TProps) => {
  const { prizeIndex, draw, isDrawing } = useLuckDraw();
  const [showToast, setShowToast] = useState<boolean>(false);
  return (
    <>
      <View
        className=" flex h-full flex-wrap justify-between items-end pb-6 "
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
            onDraw={() => {
              if (item.itemType === "button") {
                if (!isDrawing) {
                  const index = Math.floor(Math.random() * 8) + 1;
                  draw({
                    prizeKey: index,
                    onFinish: () => {
                      setShowToast(true);
                    },
                  });
                }
              }
            }}
          />
        ))}
      </View>
      <AtToast
        isOpened={showToast}
        text={`今天就吃！ ${prizeLayoutList[prizeIndex].name}`}
        duration={1500}
        onClose={() => {
          setShowToast(false);
        }}
      ></AtToast>
    </>
  );
});
