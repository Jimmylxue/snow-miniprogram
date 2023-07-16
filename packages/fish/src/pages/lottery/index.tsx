import { memo, useState } from "react";
import { Button, View } from "@tarojs/components";
import { usePrizeList } from "./core/usePrizeLIst";
import LuckDraw from "./components/LuckDraw";
import { AtButton, AtModal, AtModalHeader, AtModalAction } from "taro-ui";
import "./index.scss";
import { SettingPrize } from "./components/SettingPrize";

const Container = () => {
  const { prizeList, changePrizeList } = usePrizeList();
  const [settingVisible, setSettingVisible] = useState<boolean>(false);
  const [introduceShow, setIntroduceShow] = useState<boolean>(false);

  return (
    <View
      className=" flex w-full h-screen justify-center relative"
      style={{
        backgroundColor: "#7171f6",
      }}
    >
      <View
        className=" absolute right-1 top-1 text-sm text underline"
        style={{
          color: "#ecf0f1",
        }}
        onClick={() => {
          setIntroduceShow(true);
        }}
      >
        介绍
      </View>
      <View>
        <View
          className=" text-center text-white font-semibold text-lg mt-6 mb-8"
          style={{ color: "#ecf0f1" }}
        >
          饭食大转盘 🎡
        </View>

        {prizeList.length === 8 && (
          <LuckDraw prizeList={prizeList} drawType="NINE_LATTICE" />
        )}
        <View className="mt-6">
          <AtButton type="primary" onClick={() => setSettingVisible(true)}>
            设置奖池
          </AtButton>
        </View>

        <SettingPrize
          show={settingVisible}
          prizeList={prizeList}
          onClose={() => setSettingVisible(false)}
          title="设置奖池"
          onConfirm={(newPrizeList: { name: string }[]) =>
            changePrizeList([...newPrizeList])
          }
        />
      </View>
      <AtModal
        isOpened={introduceShow}
        onClose={() => {
          setIntroduceShow(false);
        }}
      >
        <AtModalHeader>吃啥纯凭天意 😄</AtModalHeader>
        <View className="px-3 py-2 text-sm">
          还在未外卖或出去玩时吃啥而烦恼吗？把问题交给它吧，它替你决定吃啥🤭
        </View>
        <AtModalAction>
          <Button
            onClick={() => {
              setIntroduceShow(false);
            }}
          >
            确定
          </Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
};

export default memo(() => {
  return <Container />;
});
