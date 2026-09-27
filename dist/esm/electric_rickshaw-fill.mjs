export const name="electric_rickshaw-fill";
export const id="dl_a96982d2e38d9296cfe0";
export const url=new URL("../icons/electric_rickshaw-fill.svg?v=6c69bc7e6a5a60f95d02f7d4892e247acd32db0d8e3ad3182c1e9eb782a20e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
