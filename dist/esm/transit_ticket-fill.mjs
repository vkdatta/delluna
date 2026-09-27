export const name="transit_ticket-fill";
export const id="dl_0492d03e45918800ee8d";
export const url=new URL("../icons/transit_ticket-fill.svg?v=21258f86dc4375887eb34e20db2090f1675559e16a8d753c165ba09030163b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
