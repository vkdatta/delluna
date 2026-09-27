export const name="map_search-fill";
export const id="dl_a93e1e6e1d5e1ba48b28";
export const url=new URL("../icons/map_search-fill.svg?v=b9d56309b5d0d753824eec97856b95d2b57aea501e1ff882640f927daae99e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
