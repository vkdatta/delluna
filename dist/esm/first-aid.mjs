export const name="first-aid";
export const id="dl_e142d882f389476885f5";
export const url=new URL("../icons/first-aid.svg?v=2147798408b4ea5d6b04409e264b2a13c65858a88c752e622e1e1388e1361cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
