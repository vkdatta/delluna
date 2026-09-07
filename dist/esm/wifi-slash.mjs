export const name="wifi-slash";
export const id="dl_8356354c03b440c58d71";
export const url=new URL("../icons/W/wifi-slash.svg?v=39ed62ae822a3917ac70239bbaa2144152049783451f4687456aae8f044152fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
