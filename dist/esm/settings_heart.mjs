export const name="settings_heart";
export const id="dl_56f6f5b397ffd56591f0";
export const url=new URL("../icons/settings_heart.svg?v=e990de97c2c05f8cf253f03fe61079d4a7551c01da9c7d2f1213680bfafe1309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
