export const name="ev_station";
export const id="dl_972b085191b1dd62f6f8";
export const url=new URL("../icons/ev_station.svg?v=9ce26a773944af9a75a3f3e49f0e34ac08d145e14c2e3b399bf9c4584c022b69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
