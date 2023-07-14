import { FC, useEffect, useState } from "react";
import { TPrizeList } from "../core/types";
import { AtFloatLayout, AtInput, AtButton } from "taro-ui";
import { View } from "@tarojs/components";

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
    <>
      <AtFloatLayout title={title} isOpened={show} onClose={onClose}>
        <View className="px-4">
          {JSON.stringify(list)}
          {list.map((prize, index) => (
            <AtInput
              name="value"
              title="标准五个字"
              type="text"
              placeholder="标准五个字"
              // value={this.state.value}
              // onChange={this.handleChange.bind(this)}
            />
          ))}
          <AtButton
            className="mt-3"
            onClick={() => {
              onConfirm(prizeList);
              onClose();
            }}
          >
            确认修改
          </AtButton>
        </View>
      </AtFloatLayout>
    </>
  );
};
