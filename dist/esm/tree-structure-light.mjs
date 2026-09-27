export const name="tree-structure-light";
export const id="dl_e1fce9cfd32387ee64fa";
export const url=new URL("../icons/tree-structure-light.svg?v=ab7ae6a6f956adc788ecc88693e779e83e92cca92761338417823abc1556133d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
