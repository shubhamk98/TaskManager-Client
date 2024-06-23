import { create } from "zustand";

export const useTaskStore = create((set) => ({
  taskId:"",
  title: "",
  description: "",
  details: "",
  dueDate: new Date(),
  setTitle: (title) => set({ title }),
  setTaskId: (taskId) => set({ taskId }),
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
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useTaskStore;
