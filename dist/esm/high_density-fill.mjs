export const name="high_density-fill";
export const id="dl_ba36edd54352e13f3271";
export const url=new URL("../icons/high_density-fill.svg?v=e171262df82aa1438b01dc3660318ddb62803cb1268b23508f6b878872cb9293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
