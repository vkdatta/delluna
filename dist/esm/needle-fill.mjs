export const name="needle-fill";
export const id="dl_71b76d6aa07049e6bc89";
export const url=new URL("../icons/needle-fill.svg?v=e1e9a1dbf4aa4198ce0b2b7efb8875c194e1e0da6ffd1d3f54c718f2c2fd89ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
