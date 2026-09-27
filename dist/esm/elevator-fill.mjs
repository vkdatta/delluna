export const name="elevator-fill";
export const id="dl_7ec85616ba678ef3899b";
export const url=new URL("../icons/elevator-fill.svg?v=db89407545dcf10984b682e8a3f318f766bcf1c7d3f5c8918a1d9bb127466c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
