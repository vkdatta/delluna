export const name="nest_hello_doorbell-fill";
export const id="dl_c2bd58c850ca4597acc9";
export const url=new URL("../icons/nest_hello_doorbell-fill.svg?v=02f27bfaa71ccac919b67f99886e9866f5bcdfd2489c0ed6411da6e5b012c576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
