export const name="inbox-fill";
export const id="dl_952940fdf77770bbd874";
export const url=new URL("../icons/inbox-fill.svg?v=eca41c169154c23a0e999e7bfe600c2a0c518d2957322c7966c50097889bb182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
