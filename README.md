# GitEmoji
Raycast拡張
Gitコミットの絵文字prefixを探す

~/.config/raycast/extensions/gitemoji/assets/gitmojis.json 書き換えるとその内容になる
おすすめは以下

```json
[
  {
    "emoji": "🎉",
    "title": ":tada:",
    "description": "初めてのコミット（Initial Commit）",
    "keywords": ["initial", "commit"]
  }, {
    "emoji": "🔖",
    "title": ":bookmark:",
    "description": "バージョンタグ（Version Tag）",
    "keywords": ["version", "tag"]
  }, {
    "emoji": "✨",
    "title": ":sparkles:",
    "description": "新機能（New Feature）",
    "keywords": ["new", "feature"]
  }, {
    "emoji": "🐛",
    "title": ":bug:",
    "description": "バグ修正（Bugfix）",
    "keywords": ["bug"]
  }, {
    "emoji": "♻️",
    "title": ":recycle:",
    "description": "リファクタリング(Refactoring)",
    "keywords": ["refactoring"]
  }, {
    "emoji": "📚",
    "title": ":books:",
    "description": "ドキュメント（Documentation）",
    "keywords": ["documentation"]
  }, {
    "emoji": "🎨",
    "title": ":art:",
    "description": "デザインUI/UX(Accessibility)",
    "keywords": ["design", "ui", "ux", "accessibility"]
  }, {
    "emoji": "⚡️",
    "title": ":zap:",
    "description": "パフォーマンス（Performance）",
    "keywords": ["performance"]
  }, {
    "emoji": "🔧",
    "title": ":wrench:",
    "description": "ツール（Tooling）",
    "keywords": ["tool"]
  }, {
    "emoji": "💚",
    "title": ":green_heart:",
    "description": "ビルド（Fix or Add, update CI build）",
    "keywords": ["CI", "build"]
  }, {
    "emoji": "🚨",
    "title": ":rotating_light:",
    "description": "テスト（Tests）",
    "keywords": ["test"]
  }, {
    "emoji": "💩",
    "title": ":hankey:",
    "description": "非推奨追加（Deprecation）",
    "keywords": ["deprecation"]
  }, {
    "emoji": "🗑️",
    "title": ":wastebasket:",
    "description": "削除（Removal）",
    "keywords": ["remove", "removal", "drop"]
  }, {
    "emoji": "🚧",
    "title": ":construction:",
    "description": "WIP(Work In Progress)",
    "keywords": ["wip", "work", "progress"]
  }
]
```