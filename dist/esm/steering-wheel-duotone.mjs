export const name="steering-wheel-duotone";
export const id="dl_4897e222aebec6e12290";
export const url=new URL("../icons/steering-wheel-duotone.svg?v=1a27965f75cad37eed2531cd92e8c563818c7347b235dee446bec8b566af3ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
