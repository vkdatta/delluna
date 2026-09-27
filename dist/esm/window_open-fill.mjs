export const name="window_open-fill";
export const id="dl_8a48c96c90f229b7fcd1";
export const url=new URL("../icons/window_open-fill.svg?v=49f3fa9afb6e28c7069011d3e4944dcf31e33aa0a77bfa3c25d1165e7edf99fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
