export const name="champagne-bold";
export const id="dl_3f0173807a08495eabab";
export const url=new URL("../icons/champagne-bold.svg?v=19d8d9ab09d079ab41d5e3788406ff18b6ce893638a2c5ac12a641d22ee97f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
