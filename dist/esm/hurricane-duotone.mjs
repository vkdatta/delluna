export const name="hurricane-duotone";
export const id="dl_6f320571b1ca4b0a95e6";
export const url=new URL("../icons/hurricane-duotone.svg?v=f40e34a2226c66fcdf5905d7202ec7b532fb567b20f59434a886d96f59d26f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
