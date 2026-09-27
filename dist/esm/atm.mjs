export const name="atm";
export const id="dl_1733ac94365252da614b";
export const url=new URL("../icons/atm.svg?v=b39f96dea6e409fedc0921e16d7c293613a7df6dda044102581a77a6c7ee3dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
