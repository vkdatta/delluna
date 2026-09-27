export const name="search_activity-fill";
export const id="dl_33e97357d412fd757917";
export const url=new URL("../icons/search_activity-fill.svg?v=3efda3ebb4078647a667065b1d6af84e3161309c815a5c29199f2243cb7e8af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
