
# symlink-bug

demonstrating bugged imports in files from symlinked directories

## Workaround

Enable the work around by uncommenting `mainFields: ['module']` in `rollup.config.js`

```js
import resolve from 'rollup-plugin-node-resolve'

// 1. Workaround to allow imports in symlinked files
export default {
  plugins: [
    resolve({
      // mainFields: ['module'] // 1
    })
  ],
  output: {
    name: 'app',
    format: 'iife'
  }
}
```
