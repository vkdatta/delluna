export const name="virtual-reality-duotone";
export const id="dl_46e74bba83fe1987446d";
export const url=new URL("../icons/virtual-reality-duotone.svg?v=2b5259a1523ea2c606055d94fc8fa1d652384322174167af84da938592e7c9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
