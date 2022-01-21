# Chart.vue
本コンポーネントは Chart.js 用いてグラフを描画します。

### ファイルの場所
`src/frontend/src/components/Chart.vue`

## 使い方
```
<Chart canvas-label-type="date" label-end-num="10"></Chart>
<Chart canvas-label-type="time" label-end-num="15"></Chart>
```

## 指定できるプロパティ一覧

| プロパティ名 | 説明 | 値 |
|:-----------:|:------------:|:------------:|
| `canvas-label-type` | 横軸の単位 | 日：`date` / 時：`time` |
| `label-end-num` | 横軸の最大値 | 整数値 |

## 参考文献
- [vue3で生のchart.jsを使いグラフを表示する](https://qiita.com/shira79/items/22e024b24374c0f6c2d7)
