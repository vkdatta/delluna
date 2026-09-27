export const name="bus_map_pin-fill";
export const id="dl_6a6d516e685f09a0fe27";
export const url=new URL("../icons/bus_map_pin-fill.svg?v=709237f8ee68b247a7527f45c4a292e8b307532439bd0a4bdbaddbf8fb7589bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
