export const name="stylus_pen";
export const id="dl_6760947346ac24c84598";
export const url=new URL("../icons/stylus_pen.svg?v=f792bedaa519bd4ccf6463e9ff688f0806d2d9f6d1a47f285bb3b1eb96f95ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
