import { View, Text } from "@tarojs/components";
import { FC } from "react";

interface TProps {
  item: {
    name: string;
    itemType: "button" | "prize";
  };
  prizeIndex: number;
  index: number;
  onDraw: () => void;
}

export const PrizeItem: FC<TProps> = ({ prizeIndex, item, index, onDraw }) => {
  const isDrawBtn = item.name === "立即抽奖" && item.itemType === "button";
  return (
    <View
      style={{
        width: "32%",
        height: "32%",
        backgroundColor: "#e9e8fc",
        background:
          prizeIndex === index ? "#e9e97a" : isDrawBtn ? "#f5da54" : "#f5f7d0",
      }}
      onClick={() => {
        if (isDrawBtn) {
          onDraw?.();
        }
      }}
      className=" flex justify-center items-center mt-2 rounded-lg"
    >
      <Text
        className=" text-bold"
        style={{
          color: isDrawBtn ? "#e65333" : "#d49457",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};
