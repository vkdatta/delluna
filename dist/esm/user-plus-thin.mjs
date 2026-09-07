export const name="user-plus-thin";
export const id="dl_afb4fc48d3a1413ba8cf";
export const url=new URL("../icons/U/user-plus-thin.svg?v=578414475538db2f99bf05c10ef64242043fb09a114de3056c5b059f022f9231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
