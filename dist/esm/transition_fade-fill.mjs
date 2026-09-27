export const name="transition_fade-fill";
export const id="dl_98d020d6e21be9eec282";
export const url=new URL("../icons/transition_fade-fill.svg?v=9eeb674fde16d574f6fbf4b507bbf037023cde4bedf772fed50098f91c33143d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
