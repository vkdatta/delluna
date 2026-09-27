export const name="near_me-fill";
export const id="dl_03116f0dea5dd32e0728";
export const url=new URL("../icons/near_me-fill.svg?v=2a139718ff3713abf6365d3188545ddc4c51317d196491ef4317c4d8b8dd0ebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
