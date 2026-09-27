export const name="tonality_2-fill";
export const id="dl_0fbc4d6550986a156af4";
export const url=new URL("../icons/tonality_2-fill.svg?v=0a1fc2bc818ecafaec0656a6bcb3bc96bdc7b4afe5cc5e6cfa43dae5584ad092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
