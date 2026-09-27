export const name="fast-forward-circle-duotone";
export const id="dl_df062a244e1d4749a429";
export const url=new URL("../icons/fast-forward-circle-duotone.svg?v=ca08afcfbde96125c749c80cc59cf0f16fe1cbbb7c5c1cda658dc50141ca1a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
