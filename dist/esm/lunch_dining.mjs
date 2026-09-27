export const name="lunch_dining";
export const id="dl_5442ead25e96d2938a49";
export const url=new URL("../icons/lunch_dining.svg?v=737a3a7d60d44802dda06223ce2c9d948c62f8dd47336c733a9d6587e4847200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
