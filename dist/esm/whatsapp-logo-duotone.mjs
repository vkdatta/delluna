export const name="whatsapp-logo-duotone";
export const id="dl_0ea6573193c668c88142";
export const url=new URL("../icons/whatsapp-logo-duotone.svg?v=d9d97218b35ad70bfe126bb29531a8459db1788d5c1a30295f72e1831ec5d694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
