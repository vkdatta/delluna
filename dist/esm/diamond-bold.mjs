export const name="diamond-bold";
export const id="dl_431456d387984ac0a9bc";
export const url=new URL("../icons/diamond-bold.svg?v=85ec2bc0851b2e1cbaa1deba7a059568688098493f8651949eb45aaebe0b995a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
