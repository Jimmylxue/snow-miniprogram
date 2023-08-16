import { Image, View } from "@tarojs/components";
import "taro-ui/dist/style/components/card.scss";
import { AtButton, AtRate, AtTag } from "taro-ui";
import { useEffect } from "react";
import { setNavigationBarTitle, useRouter } from "@tarojs/taro";
import { STitle } from "@/components/Title";

export default function Index() {
  const { params } = useRouter<{
    book: string;
  }>();
  console.log("parmas.bool", params.book);
  const book = JSON.parse(params?.book || "{}");

  useEffect(() => {
    console.log("params", params);
    setNavigationBarTitle({
      title: book.name,
    });
  }, [params]);
  return (
    <View
      className="px-3 relative h-screen"
      style={{
        backgroundColor: "#f6f7f7",
      }}
    >
      <View className="w-full flex justify-center pt-10">
        <Image
          src={book.imgUrl}
          style={{
            width: "270rpx",
            height: "350rpx",
          }}
        />
      </View>

      <View className="mt-5">
        <STitle titleName="类型" />
        <AtTag
          type="primary"
          style={{
            backgroundColor: "#81a3ee",
          }}
        >
          前端
        </AtTag>
        <AtTag type="primary" className=" ml-2">
          架构
        </AtTag>
      </View>

      <View className="mt-5">
        <STitle titleName="评分" />
        <View className="mt-2">我的评分</View>
        <AtRate value={3} onChange={() => {}} />
        <View className="mt-2">读者评分</View>
        <AtRate value={3} onChange={() => {}} />
      </View>

      <AtButton className="fixed w-full bottom-0 left-0" type="primary">
        下载资源
      </AtButton>
    </View>
  );
}
