export const name="brightness_7-fill";
export const id="dl_d4ebc9cf4dfce5cedbab";
export const url=new URL("../icons/brightness_7-fill.svg?v=993e416e0f92ed56b9d8b8d09bfa3eacaa609352904594665bf97c70210581e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
