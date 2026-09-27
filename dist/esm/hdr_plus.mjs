export const name="hdr_plus";
export const id="dl_8664b2635281cc35c2f1";
export const url=new URL("../icons/hdr_plus.svg?v=8bdf88215ad879e98f104efdf8660d01c6c58231af02faf092d7c98124ed4ac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
