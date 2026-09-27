export const name="interests-fill";
export const id="dl_c0cf6165997fe46b7156";
export const url=new URL("../icons/interests-fill.svg?v=6fa99ea563016e45b3e0ca5b6e20408a14ea68b2719632ace755c6796d15e2a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
