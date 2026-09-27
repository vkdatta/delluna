export const name="description";
export const id="dl_4f8fd145af4efd7defc8";
export const url=new URL("../icons/description.svg?v=a9fce7306054cc04da5711e227bf25692d4867275a372567b3a13c40024006bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
