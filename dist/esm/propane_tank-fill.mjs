export const name="propane_tank-fill";
export const id="dl_24819cb94b4afded09f9";
export const url=new URL("../icons/propane_tank-fill.svg?v=f2fa3c6ef5f3637749aee58978e52d55e786eff4bb75e9e6bd70f0a26e1b1f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
