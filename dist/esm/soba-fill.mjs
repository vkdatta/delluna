export const name="soba-fill";
export const id="dl_06b2cb56021a07503e29";
export const url=new URL("../icons/soba-fill.svg?v=7af0aa619bfc661404b85f6683fb1c7c706d0af3dadd33b19f9369fa04db813c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
