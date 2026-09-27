export const name="robot-fill";
export const id="dl_a494afbca3b64830ab4d";
export const url=new URL("../icons/robot-fill.svg?v=dd91508bd692751a8d8a15bfea73b815f4125b5e4d2f92da5f36c592183200e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
