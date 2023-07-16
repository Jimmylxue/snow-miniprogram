import { FC, useEffect, useState } from "react";
import { TPrizeList } from "../core/types";
import { AtFloatLayout, AtButton } from "taro-ui";
import { View, Input } from "@tarojs/components";
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
    setPrizeList(prizeList);
  }, [prizeList]);

  return (
    <View>
      <AtFloatLayout title={title} isOpened={show} onClose={onClose}>
        <View className="setting-prize">
          {list.map((prize, index) => (
            <Input
              key={index}
              value={prize.name}
              placeholder="请输入菜名"
              style={{
                fontSize: 14,
                lineHeight: 18,
                padding: "5px 0",
                borderBottom: "1px solid  rgb(97,144,232)",
              }}
              onInput={(value) => {
                console.log("dd", value);
                const newList = [...prizeList];
                newList[index].name = value.detail.value as string;
                setPrizeList(newList);
              }}
            />
          ))}
          <View className="mt-3">
            <AtButton
              type="primary"
              onClick={() => {
                onConfirm(prizeList);
                onClose();
              }}
            >
              确定
            </AtButton>
          </View>
        </View>
      </AtFloatLayout>
    </View>
  );
};
