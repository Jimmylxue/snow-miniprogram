import { View } from "@tarojs/components";
import { FC, HtmlHTMLAttributes, ReactNode } from "react";

interface TProps extends HtmlHTMLAttributes<HTMLDivElement> {
  titleName: string | ReactNode;
}

export const STitle: FC<TProps> = ({ titleName }) => {
  return (
    <View className="mb-2 flex items-center h-full relative">
      <View
        className="h-full mr-2 absolute left-0 top-0 rounded-md"
        style={{
          width: 4,
          backgroundColor: "rgb(97,144,232)",
        }}
      ></View>{" "}
      <View className="ml-3 text-lg font-sans font-semibold">{titleName}</View>
    </View>
  );
};
