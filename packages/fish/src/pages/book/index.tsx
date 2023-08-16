import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/card.scss";
import "./index.scss";
import { Book } from "./component/Book";
import { AtButton } from "taro-ui";

export default function Index() {
  return (
    <View
      className="px-3 relative pt-4"
      style={{
        backgroundColor: "#f6f7f7",
      }}
    >
      <View
        className="flex justify-between flex-wrap"
        style={{
          paddingBottom: "100rpx",
        }}
      >
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <View
          style={{
            width: "220rpx",
          }}
        ></View>
      </View>
      <AtButton className="fixed w-full bottom-0 left-0" type="primary">
        我要贡献
      </AtButton>
    </View>
  );
}
