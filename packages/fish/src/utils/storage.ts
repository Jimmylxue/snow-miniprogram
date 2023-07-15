import {
  getStorage as getStorages,
  setStorage,
  removeStorage as removeStorages,
  clearStorage,
} from "@tarojs/taro";

export const saveStorage = async (name: string, value: string) => {
  return new Promise((resolve, _) => {
    setStorage({
      key: name,
      data: value,
      success: function (res) {
        console.log("📌 📌storage保存成功", name, value);
        resolve(res);
      },
    });
  });
};

export const getStorage: any = (name: string) => {
  return new Promise((resolve, reject) => {
    getStorages({
      key: name,
      success: function (res) {
        resolve(res.data);
      },
      fail: function () {
        reject(false);
      },
    });
  });
};

export const removeStorage = async (name: string) => {
  return new Promise((resolve, _) => {
    removeStorages({
      key: name,
      success: function (res) {
        resolve(res);
      },
    });
  });
};

export const clearAll = async () => {
  return new Promise((resolve, _) => {
    clearStorage({
      success: function () {
        resolve(true);
      },
    });
  });
};
