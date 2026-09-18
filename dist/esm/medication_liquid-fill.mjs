export const name="medication_liquid-fill";
export const id="dl_8808ed5b20cb44edaf84";
export const url=new URL("../icons/M/medication_liquid-fill.svg?v=42b9a167c61aeced9f98630fde26382a1498887d29d4e2664c1e5ec91687a7bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
