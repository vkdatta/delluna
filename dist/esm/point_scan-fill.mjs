export const name="point_scan-fill";
export const id="dl_147ec49f09f8ed20407f";
export const url=new URL("../icons/point_scan-fill.svg?v=3a289fca329da1ac919bb1eec64d8b3a6597d5a5ad80622437b6b24ca49578b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
