export const name="lucid_2-ev-charger";
export const id="dl_a6981637765142d59d12";
export const url=new URL("../icons/lucid_2-ev-charger.svg?v=c47ef2918db550f9589af1beafe646c38f88d6a0cb476e763dbd83633a6131d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
