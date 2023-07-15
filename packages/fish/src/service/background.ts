import { ClientError } from "@snow-miniprogram/config";
import { get } from "@snow-miniprogram/api";
import { QueryKey, UseQueryOptions, useQuery } from "react-query";

type TBingImageItem = {
  startdate: string;
  fullstartdate: string;
  enddate: string;
  url: string;
  urlbase: string;
  copyright: string;
  copyrightlink: string;
  title: string;
  quiz: string;
  wp: boolean;
  hsh: string;
  drk: number;
  top: number;
  bot: number;
};

export type TBingImageList = {
  images: TBingImageItem[];
};

export function useBingBg(
  queryKey: QueryKey,
  config?: UseQueryOptions<TBingImageList, ClientError>
) {
  return useQuery<TBingImageList, ClientError>(
    queryKey,
    () => get("/bingBg/weekList"),
    config
  );
}