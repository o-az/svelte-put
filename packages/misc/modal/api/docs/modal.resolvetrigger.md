<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/modal](./modal.md) &gt; [ResolveTrigger](./modal.resolvetrigger.md)

## ResolveTrigger type

The trigger that resolves the modal

- `backdrop`<!-- -->: non-static backdrop was clicked

- `x`<!-- -->: `x` button was clicked

- `escape`<!-- -->: `escape` key was pressed

- `clickoutside`<!-- -->: click outside of modal was detected

- `pop`<!-- -->: modal was resolved from by calling the `pop` method of the modal store

- `custom`<!-- -->: modal was resolved by a custom dispatch. Use this in your custom modal when extending the `resolve` event with additional props. See [ExtendedModalEvents](./modal.extendedmodalevents.md)

<b>Signature:</b>

```typescript
export declare type ResolveTrigger = 'backdrop' | 'x' | 'escape' | 'clickoutside' | 'pop' | 'custom';
```