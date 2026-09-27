export const name="horizontal_distribute";
export const id="dl_ebb4ae22ddc423cc9573";
export const url=new URL("../icons/horizontal_distribute.svg?v=3ce5e9cf473815f9b332964136961c6c44262efc75fd17a346efc71e4a3b469c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
