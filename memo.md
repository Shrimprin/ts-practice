### 実行の流れ
- TypeScriptはJavaScriptにコンパイルして、Node.jsで実行する
- コンパイルされたJavaScriptは`dist`ディレクトリに出力される
``` bash
# コンパイル
$ npx tsc

# 実行
$ node dist/<ファイル名>
```

- .tsファイルが保存されるたびに自動でコンパイルする
``` bash
$ npx tsc --watch
```

### TSの型
#### プリミティブ型
- 文字列
- 数値
- 真偽値
- BigInt
- null
- undefined
- シンボル
