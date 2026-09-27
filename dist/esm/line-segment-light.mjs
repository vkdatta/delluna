export const name="line-segment-light";
export const id="dl_0889f8d778c449fab5bb";
export const url=new URL("../icons/line-segment-light.svg?v=b9c849f0de983516ebe1a0d70c7d75719be8427f0ed20229a7e5e04798b0791f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
