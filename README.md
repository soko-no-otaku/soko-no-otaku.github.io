# soko-no-otaku's status page

**soko-no-otaku** のステータスページ（近況報告サイト）です。

## 🛠️ 技術スタック

- **フレームワーク**: [React](https://react.dev/)
- **ビルドツール**: [Vite](https://vite.dev/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **パッケージマネージャー**: [pnpm](https://pnpm.io/)
- **リンター**: [ESLint](https://eslint.org/)
- **フォーマッター**: [Prettier](https://prettier.io/)
- **デプロイ**: GitHub Pages (GitHub Actions)

## 🚀 開発方法

### 前提条件

- Node.js 24.x
- pnpm 10.x

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/soko-no-otaku/soko-no-otaku.github.io.git
cd soko-no-otaku.github.io

# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm run dev
```

ブラウザで `http://localhost:5173` を開くと、開発中のサイトが表示されます。

### ビルド

```bash
pnpm run build
```

本番用のビルドが `dist/` ディレクトリに生成されます。

### プレビュー

```bash
pnpm run preview
```

ビルドされたサイトをローカルでプレビューできます。

### リント

```bash
pnpm run lint
```

ESLintでコードの品質チェックを実行します。

### フォーマット

```bash
# コードを自動フォーマット
pnpm run format

# フォーマットのチェックのみ（修正はしない）
pnpm run format:check
```

Prettierでコードのフォーマットを実行します。

## 🌐 デプロイ

GitHub Actionsを使用して、`main` ブランチへのプッシュ時に自動的にGitHub Pagesへデプロイされます。

デプロイワークフローは `.github/workflows/deploy.yml` で定義されています。
