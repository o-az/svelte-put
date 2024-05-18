import BananaSlug from 'github-slugger';
import MagicString from 'magic-string';
import { parse as parseSvelteMarkup } from 'svelte-parse-markup';
import { walk } from 'zimmerframe';

/**
 * default options for auto-slug
 */
const DEFAULT_AUTO_SLUG_OPTIONS = /** @satisfies {import('./types').AutoSlugOptions} */({
	tags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	files: () => true,
	attributeName: 'id',
	slug: ({ generated }) => generated,
	anchor: {
		enabled: true,
		position: 'prepend',
		content: '#',
		properties: {
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		href: (slug) => `#${slug}`,
	},
});

/**
 * @param {import('./types').AutoSlugInput} [input]
 * @returns {import('svelte/compiler').PreprocessorGroup}
 */
export function autoSlug(input = {}) {
	/** @type {import('./types').AutoSlugOptions} */
	let options = DEFAULT_AUTO_SLUG_OPTIONS;
	const iOptions = typeof input === 'function' ? input(options) : input;
	options = {
		...options,
		...iOptions,
		anchor: {
			...options.anchor,
			...(iOptions.anchor ?? {}),
		},
	};

	return {
		name: 'preprocess-auto-slug',
		markup({ content, filename }) {
			if (!options.files({ content, filename })) return;
			if (content.includes('<!-- ignore @svelte-put/preprocess-auto-slug -->')) return;
			const s = new MagicString(content);
			const ast = parseSvelteMarkup(content, { filename, modern: true });
			const slugger = new BananaSlug();

			walk(ast.template, null, {
				/**
				 * @param {import('svelte/compiler').RegularElement} node
				 * @returns {import('svelte/compiler').RegularElement}
				 */
				RegularElement(node) {
					if (
						!options.tags.includes(node.name) ||
						!node.fragment.nodes?.length
					) return node;

					let id = '';
					// find the id attribute (or as specified in user config), if any
					const idAttribute = /** @type {import('svelte/compiler').Attribute | undefined} */(node.attributes.find(
						(attr) => attr.type === 'Attribute' && attr.name === options.attributeName
					));
					if (idAttribute) {
						id = content.slice(idAttribute.start + options.attributeName.length + 1, idAttribute.end);
						if (id.startsWith('"') && id.endsWith('"')) {
							id = id.slice(1, -1);
						}
					}
					if (!id) {
						walk(node, null, {

						});
					}
				},
			});
		},
	};
}

export default autoSlug;
