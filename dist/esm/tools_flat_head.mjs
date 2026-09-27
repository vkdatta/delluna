export const name="tools_flat_head";
export const id="dl_bf8d76dec99015a74628";
export const url=new URL("../icons/tools_flat_head.svg?v=c19b0deabc855eec59af081b977d1c8c79e08cb0b1d542e659cff6e0849b2727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
