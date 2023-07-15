import { AtGrid } from "taro-ui";
import { navigateTo } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  return (
    <>
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
        ]}
      />
    </>
  );
}
