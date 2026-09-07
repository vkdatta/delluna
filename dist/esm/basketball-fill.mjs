export const name="basketball-fill";
export const id="dl_d24501d81dec48098de2";
export const url=new URL("../icons/basketball-fill.svg?v=5cbf872869acfa3f8be658d093b70f9664a7c89ade726b8b96a513488ef2efe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
