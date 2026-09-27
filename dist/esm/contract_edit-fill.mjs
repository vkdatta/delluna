export const name="contract_edit-fill";
export const id="dl_3ff91116e2fe5a81ded0";
export const url=new URL("../icons/contract_edit-fill.svg?v=ab9270e1f709d32f0ef8e1f4a39e69b4035e05908f403c4de24d4abb5fde07a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
