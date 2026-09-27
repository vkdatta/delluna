export const name="road-horizon";
export const id="dl_b573c40c4fa645179076";
export const url=new URL("../icons/road-horizon.svg?v=d218aecae828ffbc871a3cd278853621da8eb4105d3326206a0510b840fd9118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
