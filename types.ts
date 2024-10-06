export type Tag = {
  name: string;
  color: string;
}

export type TasksModule = {
  tasks: {
    title: string;
    description: string;
    isDone: boolean;
  }[]
};

export type TextModule = {
  text: string;
};

export type LocalizationModule = {
  name: string;
  x: number;
  y: number;
};

export type AttachmentModule = {
  name: string;
  filePath: string;
};

export interface ModuleList {
  TasksModule: TasksModule,
  TextModule: TextModule,
  LocalizationModule: LocalizationModule,
  AttachmentModule: AttachmentModule
};

export class Module<K extends keyof ModuleList> {
  type: K;
  value: ModuleList[K];

  constructor(type: K, value: ModuleList[K]) {
    this.type = type;
    this.value = value;
  }
}

export type Task = {
  taskGroup: string;
  title: string;
  tags: Tag[];
  duedate: Date | null;
  assignedUsers: number[];
  modules: Module<keyof ModuleList>[];
}

export type User = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
}
