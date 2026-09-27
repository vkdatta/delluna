export const name="wifi-x-fill";
export const id="dl_f32febb290083c0a0468";
export const url=new URL("../icons/wifi-x-fill.svg?v=9353af88697fe9a884d921867b3b6569ddd25f635d2cd4d0a01ebe28066cfa9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
