export const name="globe_clock-fill";
export const id="dl_a0257069c552fcaf502d";
export const url=new URL("../icons/globe_clock-fill.svg?v=c7f1eb398282c1ec4a636ef4edf31ee9dd43119e48f50e24d3d998182851b491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
