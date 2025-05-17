export type Questions = Question[];

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

export type Answer = {
  id: string;
  text: string;
  correct: boolean;
};
