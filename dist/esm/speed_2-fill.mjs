export const name="speed_2-fill";
export const id="dl_862424c27e10b3e4c701";
export const url=new URL("../icons/speed_2-fill.svg?v=bd94c90a456bfe3eb5918edbb63828f0f450ac4a33aef2c2c78258c1e0495531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
