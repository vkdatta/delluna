export const name="ink_eraser_off";
export const id="dl_0c2526456d5245663775";
export const url=new URL("../icons/ink_eraser_off.svg?v=779818e094378dae21eb862bd79a77e426469463c8d3c452302a978d9cd3b6b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
