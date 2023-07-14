import { memo } from "react";
import { TLuckDrawInterface } from "../core/types";
import useDrawLayout from "../core/useDrawLayout";
import { View } from "@tarojs/components";

export default memo<TLuckDrawInterface>(({ prizeList, drawType }) => {
  const { node } = useDrawLayout({
    prizeList,
    chartType: drawType,
  });

  return (
    <View
      className="px-2 rounded-lg"
      style={{
        borderColor: "#9dc452",
        backgroundColor: "#2e6436",
        borderWidth: "5",
      }}
    >
      {node}
    </View>
  );
});
