export const name="parking_meter-fill";
export const id="dl_43cf1eb8c94424997af8";
export const url=new URL("../icons/parking_meter-fill.svg?v=afe7f4d8955437c795e3557a74348027a85ae6bad4e155b99343e0fa2ab9e4ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
