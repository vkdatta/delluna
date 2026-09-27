export const name="cloud-moon-fill";
export const id="dl_1d2a5869a8974e119e39";
export const url=new URL("../icons/cloud-moon-fill.svg?v=611f8389887a6c2ac14ecd987748d052b9dd6a8db580edc66b532952de680360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
