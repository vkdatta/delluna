export const name="call-fill";
export const id="dl_a04aed38024f403aa297";
export const url=new URL("../icons/call-fill.svg?v=3555d08992dbe977eb84fe81eb1c913884a919006af2e84ad518b3ba53f70865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
