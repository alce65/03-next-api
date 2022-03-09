export interface TaskI {
  id?: number;
  title: string;
  responsible: string;
  isCompleted: boolean;
}

export interface PartialTaskI {
  id: number;
  title?: string;
  responsible?: string;
  isCompleted?: boolean;
}
