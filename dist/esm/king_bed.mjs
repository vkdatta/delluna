export const name="king_bed";
export const id="dl_e5f92bfa730b90aca3ff";
export const url=new URL("../icons/king_bed.svg?v=4ea1760c1b8e59fa496b8ff264dd1fc10f82e810ac7792e0847fb63b8b9fc84b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
