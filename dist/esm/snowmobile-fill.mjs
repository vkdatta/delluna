export const name="snowmobile-fill";
export const id="dl_5b9686e8a28fed04fbc4";
export const url=new URL("../icons/snowmobile-fill.svg?v=b7ce1d3e44b1a9f02b9b89ed788c0006e564a9805b86bd4091e43bd70a2b70bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
