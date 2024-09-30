type TasksModule = {
  tasks: {
    title: string;
    description: string;
    isDone: number;
  }[]
};

type TextModule = {
  text: string;
};

type LocalizationModule = {
  name: string;
  x: string;
  y: string;
};

type AttachmentModule = {
  name: string;
  filePath: string;
};

type ModuleList = TasksModule | TextModule | LocalizationModule | AttachmentModule;

type Module<K extends ModuleList = ModuleList> = {
  type: keyof K,
  value: K,
}

type Task = {
  taskGroup: string;
  title: string;
  tags: string[];
  duedate: Date;
  assigned_users: number[];
  modules: Module[];
}

type User = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
}
