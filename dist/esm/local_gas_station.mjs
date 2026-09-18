export const name="local_gas_station";
export const id="dl_14f39aef133a433fb5d8";
export const url=new URL("../icons/L/local_gas_station.svg?v=372bd7f5bcc9daaf437c74216ff9a9e0be9ce48ac8c9bcb44ff5ca51a3965ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
