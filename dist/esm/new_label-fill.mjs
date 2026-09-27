export const name="new_label-fill";
export const id="dl_f3c675a5979cd7c48536";
export const url=new URL("../icons/new_label-fill.svg?v=c5c6f589f9add04b13aad5e8d76e103f6033ed4f3209b6dc98146ba796a35dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
