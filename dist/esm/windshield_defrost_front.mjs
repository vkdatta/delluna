export const name="windshield_defrost_front";
export const id="dl_cf1f69c6900b49329c9f";
export const url=new URL("../icons/windshield_defrost_front.svg?v=576c2f3ff28ea04f8f042706f008287a985155d77791a19d2b9188deddd3d13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
