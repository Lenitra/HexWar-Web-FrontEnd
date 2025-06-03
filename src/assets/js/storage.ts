// src/stores/app.ts
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {

  state: () => ({
    isConnected: false as boolean,
    colorH: 210, // valeur par défaut (ex: bleu)
    colorS: 100, // saturation par défaut
    colorL: 50   // luminosité par défaut
  }),

  getters: {
    getIsConnected: (state) => state.isConnected
  },

  actions: {
    setColor(colorH: number, colorS: number, colorL: number) {
      if (colorH == undefined || colorS == undefined || colorL == undefined) {
        colorH = this.colorH;
        colorS = this.colorS;
        colorL = this.colorL;
      }
      this.colorH = colorH;
      this.colorS = colorS;
      this.colorL = colorL;
      document.documentElement.style.setProperty('--primary-color-h', colorH.toString());
      document.documentElement.style.setProperty('--primary-color-s', colorS.toString() + '%');
      document.documentElement.style.setProperty('--primary-color-l', colorL.toString() + '%');
    },
    setIsConnected(isConnected: boolean) {
      this.isConnected = isConnected
    }
  }

})

