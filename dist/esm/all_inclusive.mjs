export const name="all_inclusive";
export const id="dl_b09301c90796360b7107";
export const url=new URL("../icons/all_inclusive.svg?v=5abd29108faf7198b547b2f36850b287e523aa81d04966c4f83687f7532fb0f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
