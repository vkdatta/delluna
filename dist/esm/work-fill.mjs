export const name="work-fill";
export const id="dl_4689de14cd1d9ee62108";
export const url=new URL("../icons/work-fill.svg?v=033cfa3daa3307d87824f55aeb43db3cba117535ebffab4f3aa71575bae854ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
