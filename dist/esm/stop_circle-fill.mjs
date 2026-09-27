export const name="stop_circle-fill";
export const id="dl_bcbabeb3ccce1a8c413f";
export const url=new URL("../icons/stop_circle-fill.svg?v=40511bfcb5b0ed06052faaf2e205ba54eeac1d7827cfe4ca6cdc72f1672e3c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
