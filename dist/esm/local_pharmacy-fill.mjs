export const name="local_pharmacy-fill";
export const id="dl_450c534d113109e1f95f";
export const url=new URL("../icons/local_pharmacy-fill.svg?v=87529d9e2de092833616b81a69aab3e5a5c8585d115b71b85b858c4cdc3f7061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
