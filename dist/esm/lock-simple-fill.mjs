export const name="lock-simple-fill";
export const id="dl_38f5a67bc82b407fb9ae";
export const url=new URL("../icons/lock-simple-fill.svg?v=54b137caf94b8082e63a2831e5b726bbc9cd32ad40938bf5656ff4d44b442d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
