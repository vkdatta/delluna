export const name="water_ec";
export const id="dl_f176d192df214fc39a39";
export const url=new URL("../icons/water_ec.svg?v=7f804a4b281fc86075ab7e84dd56ee416c6c13f16c0178a50e5541cfc524e55a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
