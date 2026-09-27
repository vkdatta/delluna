export const name="moving_beds";
export const id="dl_e92edb1206670f249777";
export const url=new URL("../icons/moving_beds.svg?v=25aed37b9816f0164a2b500752f5a5666c83f581bcae135b7564e5b74db48f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
