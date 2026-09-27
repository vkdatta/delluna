export const name="axe-light";
export const id="dl_fb080c8b0e9b45699823";
export const url=new URL("../icons/axe-light.svg?v=d6146c6636acc843b1987d9530a96a3118ec6a921c8c4ee5a7d2f377a00431bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
