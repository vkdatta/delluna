export const name="city-bold";
export const id="dl_5718424261c64bc4b1c4";
export const url=new URL("../icons/city-bold.svg?v=7c702be7074ecbfdcd717a0b83577097ca863bcc654f6110795f186270399210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
