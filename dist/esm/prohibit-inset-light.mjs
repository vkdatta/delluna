export const name="prohibit-inset-light";
export const id="dl_38682064ac0d42058d54";
export const url=new URL("../icons/prohibit-inset-light.svg?v=855b1a3481751dc24e8a2b2ce044a0be95e8b5747b0b2a4a053b45bd9dc48625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
