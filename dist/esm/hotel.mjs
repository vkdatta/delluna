export const name="hotel";
export const id="dl_c1b0c6560a26455d6e48";
export const url=new URL("../icons/hotel.svg?v=83a667175e4ce381828e7d04ff58577f460e3e1f4105c0ba3fed7ec51e9a8afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
