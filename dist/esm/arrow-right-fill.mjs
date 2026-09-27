export const name="arrow-right-fill";
export const id="dl_a75bb8350f424fd48b1e";
export const url=new URL("../icons/arrow-right-fill.svg?v=27ebf8538dbd6db3046a3b3a74aac77e35d22229f922a52332db2dfc19d407b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
