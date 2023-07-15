import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import "taro-ui/dist/style/components/card.scss";
import { useBingBg } from "../../service/background";
import { AtIcon } from "taro-ui";
import {
  previewImage,
  downloadFile,
  showToast,
  saveImageToPhotosAlbum,
  showLoading,
  hideLoading,
} from "@tarojs/taro";
import { useEffect } from "react";

export default function Index() {
  const { data, isFetching } = useBingBg(["bingBg"]);

  console.log("data", data);

  useEffect(() => {
    isFetching ? showLoading() : hideLoading();
  }, [isFetching]);

  return (
    <View className="px-3">
      {/* <View>
        <Text className=" text-base mb-2">今日推荐</Text>
        <Image
          className="w-full"
          src="https://www.dreamplan.cn/baidu-rmb-video-cover-1/3177a704f05ebecd38e3df9fb2d733a4.jpeg"
        ></Image>
      </View> */}
      <View>
        <View className="mb-2 flex items-center h-full relative">
          <View
            className="h-full mr-2 absolute left-0 top-0 rounded-md"
            style={{
              width: 4,
              backgroundColor: "rgb(97,144,232)",
            }}
          ></View>{" "}
          <View className="ml-3 text-lg font-sans font-semibold">本周精选</View>
        </View>
        {data?.images?.map((item, index) => (
          <View key={index} className="mb-2">
            <View className="mb-1 font-sans font-semibold">{item.title}</View>
            <View className="relative">
              <AtIcon
                className="absolute right-2 top-2"
                value="download-cloud"
                size="30"
                color="#ecf0f1"
                onClick={() => {
                  downloadFile({
                    url: `https://cn.bing.com/${item.url}`,
                    success: (link) => {
                      saveImageToPhotosAlbum({
                        filePath: link.tempFilePath,
                        success: () => {
                          showToast({
                            title: "下载成功",
                            icon: "success",
                            duration: 2000,
                          });
                        },
                      });
                    },
                  });
                }}
              ></AtIcon>
              <Image
                onClick={() => {
                  previewImage({
                    current: `https://cn.bing.com/${item.url}`, // 当前显示图片的http链接
                    urls: [`https://cn.bing.com/${item.url}`], // 需要预览的图片http链接列表
                  });
                }}
                className="rounded-lg w-full"
                src={`https://cn.bing.com/${item.url}`}
              />
            </View>
            <View className=" text-justify text-gray-500 text-xs">
              {item.copyright}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
