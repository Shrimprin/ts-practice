/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #初級 #union #built-in

  ### 質問

  組み込みの型ユーティリティ`Pick<T, K>`を使用せず、`T`から`K`のプロパティを抽出する型を実装します。

  例えば：

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > GitHubで確認する：https://tsch.js.org/4/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// TS Playgroundリンク
// https://www.typescriptlang.org/play/?#code/PQKgUABBAsELQQAoEsDGBrS8491gRgJ4QCCAdgC4AWA9mcQGICuEAFAAICGlAZkwJQQAxIFwlQFi+wpmWR1h+JsgA2FOMjJgsQrREBXMYHlVDVEAivoH8GQD3xJwHYMgaPVAZwyAfhkBjDIGKGQFcMLgAYoMAHgAqADQQANIAfB6ASQyA-vKAFK6A2gyAWgyAgAwefh6A0gyAkQwewR6WgOsMgLcMgIsMLhGAvUaAX4qAmgyA0QzWEYD52oCjEYDqDIB+DNWAQAyGEIDR8oASDIAODIBY-70eExQAzlhqFACmAE48nKjzEH40ACY0EADeWFAUyBSK8wBcEFMUi2oA5ocQW-NTqLcADsd0l9e3ZA9QKCoGgAW3eZwWW0u+BoNDO3CwAF9ehRCO91psdohFvMAG7IeYAdwgAF4IABZQjedD+bY0IIAcmOp3mDIgAB8IAzgWCIfMtgzQr1gWRrhAKHTLpiaNi8QTiWSDoDAcyzpcGQBheFkCCLWEghkBR5A0Hg+aQy4rRRTeZGqDIqATDy9UIQADiJwAEkx8IBzBkAXR6AWKi6iMqBQKO8pudgMBpqgqAA6ABWUwTNEWd2A0GASc4YBAwA0oAgAH0y+WK+WIIBlBmrgGsGQDNDPZAJMMEUAGFGAU0VS5WeyWIAWNKj0RSqWgaYEQhB5gAPBZkLZTCDoeaEGg8DauxVYADaiAgahCAF0pbvDwBuMCIi9gYu9nsQRyAToZABMMgEaGeyP7t3qsD5Bg9MUOKaLrHsEAAKIAI5MJwihBGB07oqggGIhAPB6iCXLsEO8xwPGMFnP8LzAEwxzWgyg7ARAqCcDai5ktuWDwYhFA+JB0GKKxCHzEh-IAIxBJS1K0jsjKqqyoQSXa4FcUhrFQTBnHMfyABMAmjr40qiScZxspy3KmnyAoSaEUkxhAWFTHAM7MVZix6osWCCWOwn0lyYm6VyPJmpCHkMmouIwcgRlGoeGhzEsKxrBsdL7FgYk-Dc9xYM8rwfF8ZAJX8AJUQZ5r8tCsLapeYWUBFqzrEx3GQrxsVHNpFxXIl-zFWA4XLOV0lKVsym1eK9WZUlJq8nlUIQDCcLzAiyI3iAX7fn2gCE1pYj6OIAwwz5HN379oWoBYK6gDHkYAKt4RIAjoqAJDmIZhhGUYxnGiYpmmGZZsA3BTISSw5nmUAHcdgDRkbUobhpG0axq892pummbZlMcIkTIop7RAgC6DJYgBrcpYgBNUYAMhmA9dIN3cmENPbm+aFkAA

/* _____________ テストケース _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/4/answer/ja
  > 解答を見る：https://tsch.js.org/4/solutions
  > その他の課題：https://tsch.js.org/ja
*/
