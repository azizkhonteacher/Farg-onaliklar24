import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const baseURL = "https://evr.bjst.uz";
  return{
    baseURL,
  }
});
