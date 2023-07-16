import { AtDivider, AtGrid } from "taro-ui";
import { navigateTo, showToast } from "@tarojs/taro";
import { STitle } from "@/components/Title";

export default function Index() {
  return (
    <>
      <STitle titleName="摸鱼" />
      <AtGrid
        onClick={(item, index) => {
          console.log(item, index);
          if (index === 0) {
            showToast({
              title: "敬请期待",
              icon: "none",
              duration: 2000,
            });
            // navigateTo({
            //   url: "/pages/jobTime/index",
            // });
          }
        }}
        data={[
          {
            image: "https://image.jimmyxuexue.top/img/202307162150677.png",
            value: "打工时钟",
          },
        ]}
      />
      <STitle titleName="实用工具" />
      <AtGrid
        onClick={(item, index) => {
          console.log(item, index);
          if (index === 0) {
            navigateTo({
              url: "/pages/lottery/index",
            });
          } else if (index === 1) {
            navigateTo({
              url: "/pages/wallpaper/index",
            });
          } else if (index === 2) {
            console.log("2222");
            showToast({
              title: "敬请期待",
              icon: "none",
              duration: 2000,
            });
          }
        }}
        data={[
          {
            image: "https://image.jimmyxuexue.top/img/202307151759735.png",
            value: "饭食大转盘",
          },
          {
            image: "https://image.jimmyxuexue.top/img/202307152105120.png",
            value: "壁纸大全",
          },
          {
            image: "https://image.jimmyxuexue.top/img/202307162148565.png",
            value: "Todo-List",
          },
        ]}
      />
      <AtDivider content="敬请期待" />
    </>
  );
}
