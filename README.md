# Kiwi Bundle - Visual Studio Code

## Getting Started
**./package.json** (required)
```json
{
  "name": "example",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "scripts": {
		"vscode:prepublish": "kiwi build",
		"compile": "kiwi build",
		"watch": "kiwi start",
		"pretest": "kiwi build"
	},
	"engines": {
		"vscode": "^1.38.0"
	},
  "dependencies": {
    "kiwi-bundle-vscode-runtime": "1.0.0"
  },
  "devDependencies": {
    "kiwi-bundle": "3.1.0",
    "kiwi-bundle-vscode": "1.1.0"
  }
}
```

**./tsconfig.json** (required)
```json
{
  "extends": "./node_modules/kiwi-bundle/.models/ts/commonjs.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules",
    "src/**/*.test.ts",
    "src/**/*.test.tsx"
  ]
}
```

**./src/index.ts** (example)
```typescript
export const activate = KiwiBundleVSCode({})
```

**./.gitignore** (recommended)
```
dist/
node_modules/
```

**./tslint.json** (optional)
```json
{
  "extends": "./node_modules/kiwi-bundle/.models/tslint/bf.json"
}
```
