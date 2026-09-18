export const name="other_admission-fill";
export const id="dl_bfd6541fc0c94070afca";
export const url=new URL("../icons/other_admission-fill.svg?v=6ab94352ea006d20be23f1266b3d01986232c1604e1228c861599245dec49a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
