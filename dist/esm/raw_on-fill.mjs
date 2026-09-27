export const name="raw_on-fill";
export const id="dl_dfc76016771612f3db40";
export const url=new URL("../icons/raw_on-fill.svg?v=4984f73bdcb22b93202ea5c642ed6e51f5d24b48057b9531b5a56f7ae1b31714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
