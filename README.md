# MyProfileSite_001

Reactの学習を兼ねて制作している自己紹介サイトです。

React公式ドキュメントの学習内容をもとに、段階的に機能を追加しています。

Vercel URL

https://my-profile-site-001.vercel.app

## 学習Step

### Step 1：コンポーネントの分割

プロフィール、ポーカー、好きなゲームなどの内容を、それぞれReactコンポーネントに分割する。

### Step 2：Propsによるデータ受け渡し

`App.jsx`から`Profile.jsx`へプロフィール情報をPropsとして渡し、受け取ったデータを表示する。

### Step 3：配列とmapによるリスト表示

好きなゲームを配列で管理し、`map()`を使ってゲーム一覧を`<li>`として表示する。

### Step 4：useStateによる表示・非表示

`useState`を使い、ポーカーの詳細情報をボタン操作で表示・非表示できるようにする。

### Step 5：Stateによるボタン表示の変更

Stateの値に応じて、表示するボタンの文字を切り替える。

### Step 6：Stateによるポーカーランク選択

複数のポーカーランクを用意し、ボタンを押すことで現在のランクをStateとして切り替えられるようにする。

### Step 7：Stateを使ったゲーム切り替え

ゲーム一覧と`useState`を使い、ボタン操作で表示するゲームを切り替えられるようにする。

### Step 8：Stateの更新キュー

1回のイベント内でState更新を複数回行い、Stateの更新キューとUpdater Functionの動作を確認する。

### Step 9：Stateを使った入力フォーム

`input`などのフォーム要素とStateを組み合わせ、ユーザーの入力に応じて表示内容が変化する仕組みを作る。

### Step 10：State構造の設計

Stateとして管理する必要がある情報と、Stateから計算できる情報を整理し、適切なState構造を考える。

### Step 11：Stateの共有

複数のコンポーネントで同じStateを扱えるように、Stateを共通の親コンポーネントへ移動し、Propsを使って共有する。

### Step 12：Stateの保持とリセット

コンポーネントの配置や`key`によるStateの保持・リセットについて学び、ゲーム切り替え時にStateを適切に管理する。

### Step 13：ReducerによるState管理

`useReducer`を使い、複数のイベントハンドラに分散したState更新ロジックをReducerへまとめる。

### Step 14：ContextによるState共有

`createContext`と`useContext`を使い、Propsを何階層も渡すことなく、コンポーネント間でデータを共有する。

### Step 15：ReducerとContextによるState管理

ReducerとContextを組み合わせ、複数のコンポーネントからStateや`dispatch`を利用できる構成にする。

## 使用技術

* React
* JavaScript
* Vite
* Git
* GitHub

## 学習目的

Reactの基本的な仕組みを理解しながら、実際に自己紹介サイトを制作する。

公式ドキュメントの内容を読むだけでなく、学習した内容を実際の機能として実装することで、Reactの仕組みを理解することを目的とする。
