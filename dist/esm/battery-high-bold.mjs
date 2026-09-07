export const name="battery-high-bold";
export const id="dl_cb8591dae2b64e609b2a";
export const url=new URL("../icons/battery-high-bold.svg?v=9e5e2c0b1d5af94e2a85ef2556e9111edc07dc4644611560613c55e4a5a6be61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
