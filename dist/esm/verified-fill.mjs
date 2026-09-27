export const name="verified-fill";
export const id="dl_a25f416f8fc855ab0735";
export const url=new URL("../icons/verified-fill.svg?v=800787bce89948853034f30c73ca3918452da543d2f16df8c06e27ac48a08426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
