export const name="compass-rose-fill";
export const id="dl_750a1e88a3384851864c";
export const url=new URL("../icons/compass-rose-fill.svg?v=69b9485be4960b83945c2088db8d1417b19b26d02c98fad38aa50a830ce22fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
