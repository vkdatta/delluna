export const name="stamp";
export const id="dl_0ccdf4ce1208473a90b4";
export const url=new URL("../icons/stamp.svg?v=96cec9a33300971045fd7b0dd85a1aa3f32313bbf5865cc174b2a04ab48d61f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
