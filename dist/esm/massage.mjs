export const name="massage";
export const id="dl_6ddf1e9d73c309515749";
export const url=new URL("../icons/massage.svg?v=f7e6a818d41ceea655d5b85b4e0e49dbd09662d3dd9251d79927c606eb17a114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
