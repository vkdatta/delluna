export const name="route-fill";
export const id="dl_aca31e1e0b4543b0bf47";
export const url=new URL("../icons/route-fill.svg?v=60117c57411b5b04d399fc373cdd5a0d0190eeb12b47afd4922b0fa495d88783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
