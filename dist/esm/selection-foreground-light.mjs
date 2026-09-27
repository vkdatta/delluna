export const name="selection-foreground-light";
export const id="dl_b4ee9e3f98f11baab35a";
export const url=new URL("../icons/selection-foreground-light.svg?v=bd160d14b273a8ad24e32257d4176b42bf1f82965e126949bbe2e09f6369a3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
