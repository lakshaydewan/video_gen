import { create } from 'zustand';

interface Project {
  project_id: string
  name: string
  description: string
  created_at: string
  status: string
  project_access_key: string
}

interface ProjectStore {
  projects: Project[]
  addProject: (project: Project) => void
  removeProject: (project_id: string) => void
  updateProject: (project: Project) => void
  setProjects: (projects: Project[]) => void
  clearProjects: () => void
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],

  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),

  removeProject: (project_id) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.project_id !== project_id),
    })),

  updateProject: (updatedProject) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.project_id === updatedProject.project_id ? updatedProject : p
      ),
    })),

  setProjects: (projects) => set({ projects }),

  clearProjects: () => set({ projects: [] }),
}))
