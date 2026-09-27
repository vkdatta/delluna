export const name="truck-trailer-fill";
export const id="dl_b26e3cdd57aee0d5c4d5";
export const url=new URL("../icons/truck-trailer-fill.svg?v=893f32cfe6254beeebe1754ce15829be044fff1748cc375cb197ccf9405b97af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
