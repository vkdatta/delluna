export const name="browse_activity-fill";
export const id="dl_eecc8de2ddd34618a8bd";
export const url=new URL("../icons/B/browse_activity-fill.svg?v=dd9fff271ddb7e3cd51cd55a684647ea5d417572bf811dd0f63c712c7154c48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
