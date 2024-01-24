interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}

// 확장자 .d.ts로 할 시, 전역에서 import하지 않아도 불러오기 가능
