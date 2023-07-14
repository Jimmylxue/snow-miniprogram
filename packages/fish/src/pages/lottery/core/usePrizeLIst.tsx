import { useEffect, useState } from "react";
import { getStorage, saveStorage } from "../../../utils";
import { mockList } from "./mock";
import { TPrizeList } from "./types";

export function usePrizeList() {
  const [prizeList, setPrizeList] = useState<TPrizeList>([]);

  useEffect(() => {
    setPrizeList(mockList);
    // (async () => {
    //   const storageList = await getStorage("snowPrizeList");

    //   if (!storageList || JSON.parse(storageList).length !== 8) {
    //     setPrizeList(mockList);
    //   } else {
    //     setPrizeList(JSON.parse(storageList));
    //   }
    // })();
  }, []);

  const changePrizeList = async (newPrizeList: TPrizeList) => {
    const newList = [...newPrizeList];
    setPrizeList(newList);
    // await saveStorage("snowPrizeList", JSON.stringify(newList));
  };

  return {
    prizeList,
    changePrizeList,
  };
}
