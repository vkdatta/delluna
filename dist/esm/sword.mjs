export const name="sword";
export const id="dl_1d2da6c60eac762e3097";
export const url=new URL("../icons/sword.svg?v=4a8bd0f80ab00544ed177e0652d5fd115f31b71c0fae86221c8f429e2f298599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
