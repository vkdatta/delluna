export const name="personal_injury-fill";
export const id="dl_bdd3c9488b3a2fc6d074";
export const url=new URL("../icons/personal_injury-fill.svg?v=9a44af2d1e577fdf1afd6a7ff31c8ecacd153e6c5b492ab8168b934e4bdf66f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
