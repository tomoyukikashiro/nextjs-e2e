## cypress

### local development

```bash
# next.js を dev モードで起動
npm run dev

# cypress app を起動してテストをGUIで選択
npm run cypress
```

### ci

https://docs.cypress.io/guides/continuous-integration/github-actions

## playwright

### local development

```bash
npm run playwright
```

playwright は default で headless。
browser を起動する場合は config び `headless: false` を追加。

### ci

https://playwright.dev/docs/ci
