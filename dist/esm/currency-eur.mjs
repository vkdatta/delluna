export const name="currency-eur";
export const id="dl_e1223d4491ce4c24a3f7";
export const url=new URL("../icons/currency-eur.svg?v=108dcfdf7791623217fb5d2a5cba32e75ce67a2955f03c24efcf0ad4229a8ab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
