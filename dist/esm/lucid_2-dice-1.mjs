export const name="lucid_2-dice-1";
export const id="dl_85aabfbcdf284c1a944e";
export const url=new URL("../icons/lucid_2-dice-1.svg?v=8ec3a53f1f4af59e4bf48d00bd678c1b0882cb29698ffde0bf900e9e869c95eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
