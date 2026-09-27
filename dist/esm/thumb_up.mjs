export const name="thumb_up";
export const id="dl_1853c62cb8e934c6ccc3";
export const url=new URL("../icons/thumb_up.svg?v=1c97e812a52afa130ab03feb0bf95c613450ee5ac6ad98bf79bc062d07f20085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
