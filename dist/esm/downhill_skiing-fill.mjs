export const name="downhill_skiing-fill";
export const id="dl_25f182a679f299de969b";
export const url=new URL("../icons/downhill_skiing-fill.svg?v=63640e756b9447d51ed8181b9d75aca4c683091ef97b6d206d9a64c884f78a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
