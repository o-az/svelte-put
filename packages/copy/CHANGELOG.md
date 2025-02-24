# Changelog

## 3.0.1

### Patch Changes

- [`46e675e`](https://github.com/vnphanquang/svelte-put/commit/46e675e05e87ca042af231cd059dc944cd6080d5) Thanks [@vnphanquang](https://github.com/vnphanquang)! - specify Svelte peer dependency to include Svelte 5

## 3.0.0

### Major Changes

- [#204](https://github.com/vnphanquang/svelte-put/pull/204) [`52a7b75`](https://github.com/vnphanquang/svelte-put/commit/52a7b75532d921593365548cae1e7536cfa8e830) Thanks [@vnphanquang](https://github.com/vnphanquang)! - Better naming for parameter types

- [#204](https://github.com/vnphanquang/svelte-put/pull/204) [`fbf2642`](https://github.com/vnphanquang/svelte-put/commit/fbf2642ed298a67408177d78c283d226d94c7e45) Thanks [@vnphanquang](https://github.com/vnphanquang)! - Migrated to vanilla JS (tracked at #203)

## 2.0.0

### Major Changes

- [`22b3b94`](https://github.com/vnphanquang/svelte-put/commit/22b3b94c74d58f5e8f2c826d0d4a9bd15b45fa94) Thanks [@vnphanquang](https://github.com/vnphanquang)! - [BREAKING] move build output from `lib` to `dist` to stay consistent of new changes from [@sveltejs/package@2](https://github.com/sveltejs/kit/releases/tag/%40sveltejs/package%402.0.0). Also fixes some api docs issues

## 1.1.1

### Patch Changes

- [`227e8dc`](https://github.com/vnphanquang/svelte-put/commit/227e8dc11f850787f9f98eb4b24cd23015c9c25c) Thanks [@vnphanquang](https://github.com/vnphanquang)! - add "Quick Start" section in package README

## 1.1.0

### Minor Changes

- [`193c0c5`](https://github.com/vnphanquang/svelte-put/commit/193c0c5c9525ade0ec4e9a512c21e96a26139238) Thanks [@vnphanquang](https://github.com/vnphanquang)! - [BREAKING] deprecate `on:copy` in favor of `on:copied` to avoid conflict with default `copy` event

- [`193c0c5`](https://github.com/vnphanquang/svelte-put/commit/193c0c5c9525ade0ec4e9a512c21e96a26139238) Thanks [@vnphanquang](https://github.com/vnphanquang)! - allow simulate the `copy` event by setting `sythetic: true`

### Patch Changes

- [`193c0c5`](https://github.com/vnphanquang/svelte-put/commit/193c0c5c9525ade0ec4e9a512c21e96a26139238) Thanks [@vnphanquang](https://github.com/vnphanquang)! - deprecate ambient typing in favor of [new action type helper](https://github.com/sveltejs/svelte/pull/7805)

## 1.0.2

### Patch Changes

- [`ad5ceab`](https://github.com/vnphanquang/svelte-put/commit/ad5ceab52f89adbcd6d4680c247113c96063f395) Thanks [@vnphanquang](https://github.com/vnphanquang)! - Migrate to [svelte check 3.0](https://github.com/sveltejs/language-tools/releases/tag/svelte-check-3.0.1), using `svelteHTML` namespace now instead of `svelte.JSX`

## 1.0.1

### Patch Changes

- [`7764c7d`](https://github.com/vnphanquang/svelte-put/commit/7764c7d85f8ee12b45cb9eb68a246fcd8e3f8839) Thanks [@vnphanquang](https://github.com/vnphanquang)! - adjust types entry to `src/index.d.ts`

## 1.0.0

### Major Changes

- [`9b19f15`](https://github.com/vnphanquang/svelte-put/commit/9b19f1565f84c9ec98e051943ebfc7bc3ce17357) Thanks [@vnphanquang](https://github.com/vnphanquang)! - Mature implementation, dedicated docs site, regenerated api

### Patch Changes

- [`c36a663`](https://github.com/vnphanquang/svelte-put/commit/c36a66324003b6011d6f0d9d590e81ab4f65dca5) Thanks [@vnphanquang](https://github.com/vnphanquang)! - pass additional to `TextResolver` function (`text` parameter callback variant)

- [`77a428c`](https://github.com/vnphanquang/svelte-put/commit/77a428c64e22925c4b6d1d123aaa4e1489c6dd28) Thanks [@vnphanquang](https://github.com/vnphanquang)! - allow cusomtizing event types for `addEventListener`

- [`42cbcf5`](https://github.com/vnphanquang/svelte-put/commit/42cbcf5d66e028cec7c4a358ec696f7fcc1d12d8) Thanks [@vnphanquang](https://github.com/vnphanquang)! - set parameters to optional, allow using just `use:copy`

- [`91dbee1`](https://github.com/vnphanquang/svelte-put/commit/91dbee1bd8f4b797f12cbec60569d36434dfacac) Thanks [@vnphanquang](https://github.com/vnphanquang)! - link to dedicated docs site at https://svelte-put.vnphanquang.com/docs/copy

## 0.1.0

### Minor Changes

- [#64](https://github.com/vnphanquang/svelte-put/pull/64) [`6a78268`](https://github.com/vnphanquang/svelte-put/commit/6a78268235d03a1c218df50aefb823315c1c104a) Thanks [@vnphanquang](https://github.com/vnphanquang)! - initial implementation
