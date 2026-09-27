export const name="curtains_closed-fill";
export const id="dl_0fd3ced3ea0ab3073db6";
export const url=new URL("../icons/curtains_closed-fill.svg?v=9fb236a62a50682d04b1633533b23c926c6e6bae3d3a57f1b7ea388f8b7d93ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
