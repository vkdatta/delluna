export const name="currency-eur";
export const id="dl_e1223d4491ce4c24a3f7";
export const url=new URL("../icons/currency-eur.svg?v=0b97f49af1a680efb2dad44fab8c9f537a3db71d067be5f378d78f11bb47607c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
