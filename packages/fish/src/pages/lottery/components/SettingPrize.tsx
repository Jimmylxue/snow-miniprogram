import { FC, useEffect, useState } from "react";
import { TPrizeList } from "../core/types";
import { AtFloatLayout, AtInput, AtButton } from "taro-ui";
import { View } from "@tarojs/components";
// import "taro-ui/dist/style/components/input.scss";
import "./index.scss";

interface TProps {
  show: boolean;
  title: string;
  prizeList: TPrizeList;
  onClose: () => void;
  onConfirm: (newPrizeList: TPrizeList) => void;
}

export const SettingPrize: FC<TProps> = ({
  show,
  title,
  onClose,
  onConfirm,
  prizeList,
}) => {
  const [list, setPrizeList] = useState<TPrizeList>([]);

  useEffect(() => {
    console.log("prize:ist", prizeList);
    setPrizeList(prizeList);
  }, [prizeList]);

  return (
    <View>
      <AtFloatLayout title={title} isOpened={show} onClose={onClose}>
        <View className="setting-prize">
          {list.map((prize, index) => (
            // <Input value={prize.name} />
            <AtInput
              key={index}
              name="value"
              type="text"
              title=""
              style={{
                fontSize: 12,
                lineHeight: 18,
                padding: "5px 0",
              }}
              placeholder="请输入菜名"
              value={prize.name}
              onChange={(val) => {
                const newList = [...prizeList];
                newList[index].name = val as string;
                setPrizeList(newList);
              }}
            />
          ))}
          <AtButton
            type="primary"
            className="mt-3"
            onClick={() => {
              onConfirm(prizeList);
              onClose();
            }}
          >
            确定
          </AtButton>
        </View>
      </AtFloatLayout>
    </View>
  );
};
