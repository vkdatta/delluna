export const name="lock-simple-fill";
export const id="dl_38f5a67bc82b407fb9ae";
export const url=new URL("../icons/lock-simple-fill.svg?v=f59062a3b099adf374a11de8591b137de32ad22a80e31de2e2e39cc71ed01dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
