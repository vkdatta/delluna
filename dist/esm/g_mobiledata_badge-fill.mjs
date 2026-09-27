export const name="g_mobiledata_badge-fill";
export const id="dl_9876f8acb686ab398ba2";
export const url=new URL("../icons/g_mobiledata_badge-fill.svg?v=a30f1bfd8a386b63d97fcc7b3bd8ac508c1c01eb71fb7116f498a31b7fef1f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
