export const name="browse_activity-fill";
export const id="dl_510119433fd7cd987e03";
export const url=new URL("../icons/browse_activity-fill.svg?v=a2f230ef1eea110dd909d6757ffaf742ed4f1ea525868cfa10efd1aa2074b0d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
