export const name="bus_alert-fill";
export const id="dl_ac48985f10204db5acd0";
export const url=new URL("../icons/B/bus_alert-fill.svg?v=20c796cc17b28ec576c5b86f331e82f8dc043b535a6a85af8c873a677a155675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
