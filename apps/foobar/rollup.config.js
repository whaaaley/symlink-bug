
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
