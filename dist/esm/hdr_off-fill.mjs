export const name="hdr_off-fill";
export const id="dl_b1ce0690750e49e59890";
export const url=new URL("../icons/hdr_off-fill.svg?v=6501a33ecbf08d80f5fea5b0ce82a343a71b96b0594491e2c649d2216bd40485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
