export const name="battery_full";
export const id="dl_d8e23a91c06f192a2439";
export const url=new URL("../icons/battery_full.svg?v=e2c6225a9b368a868b88ae7443708fa9ce1e91c29bae120595e710a4eefe256b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
