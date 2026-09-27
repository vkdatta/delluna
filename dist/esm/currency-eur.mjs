export const name="currency-eur";
export const id="dl_e1223d4491ce4c24a3f7";
export const url=new URL("../icons/currency-eur.svg?v=a6a3d281384f66d64bf74791bf13f89155dc1af8a15206fbcf9157c5832d2c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
