export const name="soup_kitchen-fill";
export const id="dl_7cb8e2f1a1def786f0bb";
export const url=new URL("../icons/soup_kitchen-fill.svg?v=a1328ece412608bc960657bad688aac32135c9bc1d90185bcb583b944a002604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
