import { useEffect, useState } from "react";
import { getStorage, saveStorage } from "../../../utils";
import { mockList } from "./mock";
import { TPrizeList } from "./types";

export function usePrizeList() {
  const [prizeList, setPrizeList] = useState<TPrizeList>([]);

  useEffect(() => {
    (async () => {
      try {
        const storageList = await getStorage("snowPrizeList");
        console.log(storageList);
        if (!storageList || JSON.parse(storageList).length !== 8) {
          setPrizeList(mockList);
        } else {
          setPrizeList(JSON.parse(storageList));
        }
      } catch (error) {
        setPrizeList(mockList);
      }
    })();
  }, []);

  const changePrizeList = async (newPrizeList: TPrizeList) => {
    // const newList = [...newPrizeList];

    console.log("newPr", newPrizeList);
    await saveStorage("snowPrizeList", JSON.stringify(newPrizeList));
    setPrizeList(newPrizeList);
  };

  return {
    prizeList,
    changePrizeList,
  };
}
