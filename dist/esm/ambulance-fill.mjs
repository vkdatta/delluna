export const name="ambulance-fill";
export const id="dl_5d2732a254f74afdaf05";
export const url=new URL("../icons/ambulance-fill.svg?v=1dd9d7bb5309fcffbc5510e1e9a0ad816e93a5f23cfb82b5eba942fc079234bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
