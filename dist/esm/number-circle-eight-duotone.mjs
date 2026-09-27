export const name="number-circle-eight-duotone";
export const id="dl_a2b333ace9024b7c802b";
export const url=new URL("../icons/number-circle-eight-duotone.svg?v=5d711e0e89d77a55f4b0e7ddfbd0e1feb08145bbf354b3677688cd2a6b6b5fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
