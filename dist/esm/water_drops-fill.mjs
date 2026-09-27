export const name="water_drops-fill";
export const id="dl_d76a9aefecd5b66da67b";
export const url=new URL("../icons/water_drops-fill.svg?v=a8feece135da741c6b692eff41740c08e58327c9dea3fbd514351bd4216901ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
