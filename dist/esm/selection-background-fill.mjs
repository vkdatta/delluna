export const name="selection-background-fill";
export const id="dl_b9184c268f9142208361";
export const url=new URL("../icons/S/selection-background-fill.svg?v=41d7b60d377936ca2254af8c579b67ba9da04b679dbecac917719ec3f8c1204f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
