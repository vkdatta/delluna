export const name="lucid_1-candy";
export const id="dl_9527495a200f44b095fe";
export const url=new URL("../icons/lucid_1-candy.svg?v=0bb4e22ab93199a46be77f8f381664e7be90d142d9341bee2d496ad7b87cce91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
