export const name="potted_plant-fill";
export const id="dl_d0c5e3cc08d9d25febd1";
export const url=new URL("../icons/potted_plant-fill.svg?v=8c8ac0d366b5b070a784b7a4c41e31221808b9d7fea82335f4dc7e741d9cc588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
