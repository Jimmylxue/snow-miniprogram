import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/card.scss";
import { AtButton, AtCountdown, AtProgress } from "taro-ui";
import "./index.scss";

export default function Index() {
  return (
    <View className="jobTime px-3 relative">
      <View>今日已薅💴：￥600</View>
      <AtProgress percent={50} status="progress" />
      <View>下班时间，该学习啦~</View>
      <View>周末体验卡剩余时间：</View>
      <AtCountdown
        className="text-lg"
        isShowDay
        isShowHour
        format={{ hours: ":", minutes: ":", seconds: "" }}
        seconds={10}
        onTimeUp={() => {}}
      />
      <AtButton type="primary">设置基数</AtButton>
    </View>
  );
}
