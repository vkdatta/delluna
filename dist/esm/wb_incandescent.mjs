export const name="wb_incandescent";
export const id="dl_f7e8448693c1d2e5eddb";
export const url=new URL("../icons/wb_incandescent.svg?v=f3149f184d8bac28dbd1e762b04bb91c84547ad8797c904c6e165c64e37e8a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
