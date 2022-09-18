<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@svelte-put/modal](./modal.md) &gt; [createModalStore](./modal.createmodalstore.md)

## createModalStore() function

Create a svelte store for handling modal

<b>Signature:</b>

```typescript
export declare function createModalStore(): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<ApplicableModal[]>, invalidate?: ((value?: ApplicableModal[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    push: <Component extends ModalComponentBase, Resolved extends ModalComponentBaseResolved = ComponentEvents<Component>["resolve"]["detail"]>(input: ModalPushInput<Component>) => ModalPushOutput<Component, ComponentEvents<Component>["resolve"]["detail"]>;
    pop: <Resolved_1>(id?: string, resolved?: Resolved_1 | null) => ApplicableModal | undefined;
};
```
<b>Returns:</b>

{ subscribe: (this: void, run: import("svelte/store").Subscriber&lt;ApplicableModal\[\]&gt;, invalidate?: ((value?: ApplicableModal\[\] \| undefined) =&gt; void) \| undefined) =&gt; import("svelte/store").Unsubscriber; push: &lt;Component extends [ModalComponentBase](./modal.modalcomponentbase.md)<!-- -->, Resolved extends [ModalComponentBaseResolved](./modal.modalcomponentbaseresolved.md) = ComponentEvents&lt;Component&gt;\["resolve"\]\["detail"\]&gt;(input: [ModalPushInput](./modal.modalpushinput.md)<!-- -->&lt;Component&gt;) =&gt; [ModalPushOutput](./modal.modalpushoutput.md)<!-- -->&lt;Component, ComponentEvents&lt;Component&gt;\["resolve"\]\["detail"\]&gt;; pop: &lt;Resolved\_1&gt;(id?: string, resolved?: Resolved\_1 \| null) =&gt; ApplicableModal \| undefined; }

extended svelte store

## Example


```typescript
import { createModalStore } from '@svelte-put/modal';
const store = createModalStore();
```
