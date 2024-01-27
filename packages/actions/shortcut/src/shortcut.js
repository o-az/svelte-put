/**
 * Listen for keyboard event and trigger `shortcut` {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent | CustomEvent }
 * @public
 *
 * @example Typical usage
 *
 * ```svelte
 * <script lang="ts">
 *  import { shortcut, type ShortcutEventDetail } from '@svelte-put/shortcut';
 *
 *  let commandPalette = false;
 *
 *  function onOpenCommandPalette() {
 *    commandPalette = true;
 *  }
 *  function onCloseCommandPalette() {
 *    commandPalette = false;
 *  }
 *
 *  function doSomethingElse(details: ShortcutEventDetail) {
 *    console.log('Action was placed on:', details.node);
 *    console.log('Trigger:', details.trigger);
 *  }
 *
 *  function onShortcut(event: CustomEvent<ShortcutEventDetail>) {
 *    if (event.detail.trigger.id === 'do-something-else') {
 *      console.log('Same as doSomethingElse()');
 *      // be careful here doSomethingElse would have been called too
 *   }
 * }
 * </script>
 *
 * <svelte:window
 *   use:shortcut={{
 *     trigger: [
 *       {
 *         key: 'k',
 *
 *         // trigger if either ctrl or meta is pressed
 *         modifier: ['ctrl', 'meta'],
 *
 *         callback: onOpenCommandPalette,
 *         preventDefault: true,
 *       },
 *       {
 *         key: 'Escape',
 *
 *         // preferably avoid arrow functions here for better performance
 *         // with arrow functions the action has to be updated more frequently
 *         callback: onCloseCommandPalette,
 *
 *         enabled: commandPalette,
 *         preventDefault: true,
 *       },
 *      {
 *         key: 'k',
 *
 *         // trigger if both ctrl & shift are pressed
 *         modifier: [['ctrl', 'shift']],
 *         id: 'do-something-else',
 *         callback: doSomethingElse,
 *      },
 *     ],
 *   }}
 *   on:shortcut={onShortcut}
 * />
 * ```
 *
 * @remarks
 *
 * As with any svelte action, `shortcut` should be use with element and not component.
 *
 * ```html
 * <-- correct usage-->
 *  <div use:intersect />
 *
 * <-- incorrect usage-->
 * <Component use:intersect/>
 * ```
 *
 * You can either:
 *
 * - pass multiple callbacks to their associated triggers, or
 *
 * - pass one single handler to the `on:shortcut` event, in which case you should
 * provide an ID to each trigger to be able to distinguish what trigger was activated
 * in the event handler.
 *
 * Either way, only use `callback` or `on:shortcut` and not both to
 * avoid handler duplication.
 *
 * @param {HTMLElement} node - HTMLElement to add event listener to
 * @param {import('./public').ShortcutParameter} param - svelte action parameters
 * @returns {import('./public').ShortcutActionReturn}
 */
export function shortcut(node, param) {
  let { enabled = true, trigger, type = 'keydown' } = param;

  /**
   * @param {KeyboardEvent} event
   */
  function handler(event) {
    const normalizedTriggers = Array.isArray(trigger) ? trigger : [trigger];
    /** @type {Record<import('./public').ShortcutModifier, boolean>} */
    // const modifierChecks = [
    //   /** @type {const} */({ key: 'alt', active: event.altKey }),
    //   /** @type {const} */({ key: 'ctrl', active: event.ctrlKey }),
    //   /** @type {const} */({ key: 'shift', active: event.shiftKey }),
    //   /** @type {const} */({ key: 'meta', active: event.metaKey }),
    // ];
    for (const trigger of normalizedTriggers) {
      const mergedTrigger = {
        modifier: [],
        preventDefault: false,
        enabled: true,
        ...trigger,
      };
      const { modifier, key, callback, preventDefault, enabled: triggerEnabled } = mergedTrigger;
      if (triggerEnabled) {
        if (event.key === key) {
          if (modifier.length) {
            const modifierORs = (Array.isArray(modifier) ? modifier : [modifier]).map((def) =>
              typeof def === 'string' ? [def] : def,
            );

            // /** @type {Array<typeof modifierChecks[number]>} */
            // const matched = [];
            // /** @type {Array<typeof modifierChecks[number]>} */
            // const notMatched = [];

            let modified = true;
            for (const modifierANDs of modifierORs) {
              const modifiedMap = {
                alt: event.altKey,
                ctrl: event.ctrlKey,
                shift: event.shiftKey,
                meta: event.metaKey,
              };

              for (const modifier of modifierANDs) {
                if (!(modifier in modifiedMap)) continue;

                if (!modifiedMap[modifier]) {
                  modified = false;
                  break;
                }

                delete modifiedMap[modifier];
              }
              // for (const modifier of modifierChecks) {
              //   if (modifierANDs.some(def => modifier.key === def)) {
              //     matched.push(modifier);
              //   } else {
              //     notMatched.push(modifier);
              //   }
              // }

              // make sure all other modifiers not in definition are not pressed
              if (modified) {
                modified = Object.values(modifiedMap).every(
                  (isModifierActive) => !isModifierActive,
                );
              }
            }

            if (!modified) continue;

            // if (matched.every(m => m.active))

            // const modified = modifierDefs.some((def) =>
            //   def.every((modifier) => modifiedMap[modifier]),
            // );
            // if (!modified) continue;
          }
          if (preventDefault) event.preventDefault();
          /** @type {import('./public').ShortcutEventDetail} */
          const detail = {
            node,
            trigger: mergedTrigger,
            originalEvent: event,
          };
          node.dispatchEvent(new CustomEvent('shortcut', { detail }));
          callback?.(detail);
        }
      }
    }
  }

  if (enabled) node.addEventListener(type, handler);

  return {
    update: (update) => {
      const { enabled: newEnabled = true, type: newType = 'keydown' } = update;

      if (enabled && (!newEnabled || type !== newType)) {
        node.removeEventListener(type, handler);
      } else if (!enabled && newEnabled) {
        node.addEventListener(newType, handler);
      }

      enabled = newEnabled;
      type = newType;
      trigger = update.trigger;
    },
    destroy: () => {
      node.removeEventListener(type, handler);
    },
  };
}
