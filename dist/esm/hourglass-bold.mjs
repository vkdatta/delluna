export const name="hourglass-bold";
export const id="dl_1aba6eabf17647218ce8";
export const url=new URL("../icons/hourglass-bold.svg?v=79f1546eab6e7c4d2275efe20be91ed0e1f598eae40c50df6eb5f0a241f2d983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
