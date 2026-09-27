export const name="gif-bold";
export const id="dl_5820332f3b9046d59f15";
export const url=new URL("../icons/gif-bold.svg?v=d76f99870b077878f8e3d9aabe440b1cacdb4748f382c52caaa1e25268f9c9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
