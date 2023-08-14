import { View, Image, Button } from "@tarojs/components";
import "./index.scss";
import "taro-ui/dist/style/components/card.scss";
import { useBingBg } from "@/services/background";
import { AtIcon, AtModal, AtModalAction, AtModalHeader } from "taro-ui";
import {
  previewImage,
  downloadFile,
  showToast,
  saveImageToPhotosAlbum,
  showLoading,
  hideLoading,
} from "@tarojs/taro";
import { useEffect, useState } from "react";
import { STitle } from "@/components/index";

export default function Index() {
  const { data, isFetching } = useBingBg(
    ["bingBg"],
    {},
    {
      refetchOnWindowFocus: false,
    }
  );
  const [introduceShow, setIntroduceShow] = useState<boolean>(false);

  useEffect(() => {
    isFetching ? showLoading() : hideLoading();
  }, [isFetching]);

  return (
    <View className="px-3 relative">
      <View
        className=" absolute right-1 top-1 text-sm text underline z-10"
        style={{
          color: "rgb(97,144,232)",
        }}
        onClick={() => {
          setIntroduceShow(true);
        }}
      >
        介绍
      </View>
      <STitle titleName="本周推荐" />
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
      <AtModal isOpened={introduceShow}>
        <AtModalHeader>壁纸大全 😄</AtModalHeader>
        <View className="px-3 py-2 text-sm">
          图片资源来自Bing 每日推荐壁纸🤭, 支持超高清（UHD）下载。
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
}
