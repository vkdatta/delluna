export const name="currency-circle-dollar";
export const id="dl_fe5c010baf6e4a0c90ec";
export const url=new URL("../icons/currency-circle-dollar.svg?v=141a655b6e67fb160c04cf2115fdfe1d2ee2296ad903030262c53dc70edfb95d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
