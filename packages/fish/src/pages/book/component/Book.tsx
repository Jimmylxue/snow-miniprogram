import { Image, View } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";

export function Book() {
  return (
    <View
      className="flex flex-col justify-center items-center mb-2"
      style={{
        width: "220rpx",
      }}
      onClick={() => {
        const book = {
          name: "前端架构-从入门到微前端入门",
          imgUrl: "https://image.jimmyxuexue.top/img/202308161421869.png",
        };
        navigateTo({
          url: `/pages/bookDetail/index?book=${JSON.stringify(book)}`,
        });
      }}
    >
      <Image
        style={{
          width: "180rpx",
          height: "250rpx",
        }}
        src="https://image.jimmyxuexue.top/img/202308161421869.png"
      />
      <View className="line-clamp-2 text-center text-xs mt-1">
        前端架构-从入门到微前端入门
      </View>
    </View>
  );
}
