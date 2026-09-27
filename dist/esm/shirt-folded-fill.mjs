export const name="shirt-folded-fill";
export const id="dl_e7910147ed1abbc209be";
export const url=new URL("../icons/shirt-folded-fill.svg?v=94ea1477daecb6c72f63586c5fd4e5247846acb9b12b63e02fc1e89f4bcbee97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
