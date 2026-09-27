export const name="tooltip-fill";
export const id="dl_e5f3439e48c2d90ca1da";
export const url=new URL("../icons/tooltip-fill.svg?v=2fdc405419936a0ba991a1c5ead9842f40baffdfa299df3f171b0a8d1a5204e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
