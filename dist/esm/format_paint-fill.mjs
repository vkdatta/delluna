export const name="format_paint-fill";
export const id="dl_e90c5873834a73ae518f";
export const url=new URL("../icons/format_paint-fill.svg?v=8b49d5ba7430d558324e84bb0a8f4d761ac1ee23084693b40fadce34010b0121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
