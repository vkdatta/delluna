export const name="nest_eco_leaf-fill";
export const id="dl_44d60d91cd5145cbbfd2";
export const url=new URL("../icons/nest_eco_leaf-fill.svg?v=e3307d851f120dc68076cd802df136763736b3a0156bc7b3d6035a813d082f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
