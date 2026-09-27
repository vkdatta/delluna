export const name="dvr-fill";
export const id="dl_a8e500436761fe81a0e8";
export const url=new URL("../icons/dvr-fill.svg?v=13e8fd54f3780f4cb55d1ac5b295acc4964e5c7d139f120fe43d398b0a104950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
