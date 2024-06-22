import { create } from "zustand";

export const useTaskStore = create((set) => ({
  title: "",
  description: "",
  details: "",
  dueDate: new Date(),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setDetails: (details) => set({ details }),
  setDueDate: (dueDate) => set({ dueDate }),
  resetTask: () =>
    set({
      title: "",
      description: "",
      details: "",
      dueDate: new Date(),
    }),
}));

export default useTaskStore;
