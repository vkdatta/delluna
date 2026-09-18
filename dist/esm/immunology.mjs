export const name="immunology";
export const id="dl_54a7d96246af4c2f8ee0";
export const url=new URL("../icons/I/immunology.svg?v=371e84292acfe2b5c1603657eb55f337b04d347a79f353db5978a810fc723fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
