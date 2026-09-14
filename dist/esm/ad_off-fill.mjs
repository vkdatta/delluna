export const name="ad_off-fill";
export const id="dl_e63f84b87ee1478d9c02";
export const url=new URL("../icons/A/ad_off-fill.svg?v=6fe16b74101f8f880650c8f0399153aad113ef4d2593e07ea04ffb54dfad00dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
