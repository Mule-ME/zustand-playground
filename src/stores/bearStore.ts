import { create } from "zustand";

type IBearStore = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  updateBears: (newBears: number) => void;
  removeBears: () => void;
};

const useBearStore = create<IBearStore>((set) => ({
  bears: 0,
  color: "black",
  size: "small",
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));



