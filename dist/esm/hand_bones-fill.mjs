export const name="hand_bones-fill";
export const id="dl_811123626800467c843b";
export const url=new URL("../icons/H/hand_bones-fill.svg?v=18e4244774356a9a32a4f9d51069937694a626736df2ad861abccb06e03433f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
