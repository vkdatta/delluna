export const name="host-fill";
export const id="dl_aaca98068847976075a5";
export const url=new URL("../icons/host-fill.svg?v=026a728ae2529a0b5fdc2dca60f42f048ad9b0efda03d027ed7170de51896981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
