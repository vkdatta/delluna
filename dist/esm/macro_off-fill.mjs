export const name="macro_off-fill";
export const id="dl_d4bb09e77a5dd296843c";
export const url=new URL("../icons/macro_off-fill.svg?v=85523f0ade60ae6de5a80acd0a07f4c4e66caaf035b4972861e89f92913e3c21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
