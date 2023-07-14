import { memo, useState } from "react";
import { View, Text } from "@tarojs/components";
import { usePrizeList } from "./core/usePrizeLIst";
import LuckDraw from "./components/LuckDraw";
import { AtButton } from "taro-ui";
import "./index.scss";
import { SettingPrize } from "./components/SettingPrize";
// import { SettingPrize } from "./components/SettingPrize";
// import { SettingPrize } from "./components/SettingPrize";
// import { usePrizeList } from "./core/usePrizeLIst";

const Container = () => {
  const { prizeList, changePrizeList } = usePrizeList();
  const [settingVisible, setSettingVisible] = useState<boolean>(false);

  return (
    <View
      className=" flex w-full h-screen justify-center"
      style={{
        backgroundColor: "#7171f6",
      }}
    >
      <View>
        {prizeList.length === 8 && (
          <LuckDraw prizeList={prizeList} drawType="NINE_LATTICE" />
        )}
        <View className="mt-6">
          <AtButton onClick={() => setSettingVisible(true)}>设置奖池</AtButton>
        </View>

        <SettingPrize
          show={true}
          // show={settingVisible}
          prizeList={prizeList}
          onClose={() => setSettingVisible(false)}
          title="设置奖池"
          onConfirm={(newPrizeList: { name: string }[]) =>
            changePrizeList([...newPrizeList])
          }
        />
      </View>
    </View>
  );
};

export default memo(() => {
  return <Container />;
});
