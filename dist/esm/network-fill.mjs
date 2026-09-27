export const name="network-fill";
export const id="dl_db99f9d0e17c4125893d";
export const url=new URL("../icons/network-fill.svg?v=b5c5536213e09ab6478e171bfa5c407579b3e489e33476ecfd84efe0b184e526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
